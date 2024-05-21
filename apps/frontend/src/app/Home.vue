<template>
  <div
    class="nx-welcome text-center font-sans p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-md max-w-xl mx-auto mt-12">
    <h2 class="text-3xl font-bold text-gray-900 mb-5">Audio Store</h2>
    <div class="flex justify-center gap-4 mb-5">
      <button id="record" class="btn start bg-green-600 text-white py-2 px-6 rounded-xl hover:bg-green-700"
              @click="toggleRecording">Record
      </button>
      <button id="pause" class="btn stop bg-yellow-500 text-white py-2 px-6 rounded-xl hover:bg-yellow-600"
              @click="togglePause" style="display:none;">Pause
      </button>
    </div>

    <div id="waveform" class="mb-5 h-32 bg-white rounded-lg shadow-inner relative">
      <svg class="absolute top-0 left-0 w-full h-full">
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#00bfff" stroke-width="2" />
      </svg>
    </div>
    <div id="progress" class="text-xl text-gray-700 mb-5">{{ formattedTime }}</div>
    <h3 class="text-2xl font-medium text-gray-800 mb-5">Recordings</h3>
    <ul class="list-none" id="recordings">
      <li v-for="recording in recordings" :key="recording.id"
          class="recording-card bg-white rounded-lg shadow-md p-4 mb-3">
        <div class="flex items-center justify-between mb-2">
          <input type="text" v-model="recording.name" placeholder="Enter recording name"
                 class="w-full mb-2 p-2 border border-gray-300 rounded" />
          <button class="btn save bg-blue-600 text-white py-2 px-3 rounded-xl hover:bg-blue-700 ml-3 mb-2"
                  @click="saveRecordingName(recording.id, recording.name)">Update
          </button>
          <a :href="recording.url" :download="`${recording.name}.wav`"
             class="btn download bg-blue-400 text-white py-2 px-3 rounded-xl hover:bg-blue-500 ml-1 mb-2">Download</a>
          <button class="btn delete bg-red-400 text-white py-2 px-3 rounded-xl hover:bg-red-500 ml-1 mb-2"
                  @click="deleteRecording(recording.id)">Delete
          </button>
        </div>
        <div :id="'waveform-' + recording.id" class="waveform-instance mb-3 relative"></div>
        <audio :src="recording.url" controls class="w-full rounded-lg" @play="playWaveform(recording.id)"
               @pause="pauseWaveform(recording.id)" @timeupdate="syncWaveform(recording.id, $event)"></audio>
      </li>
    </ul>
  </div>
</template>

<script>

import { computed, onMounted, ref } from 'vue';
import axios from 'axios';
import WaveSurfer from 'wavesurfer.js';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.esm.js';
import { useToast } from 'vue-toastification';

export default {
  name: 'AudioStoreHomePage',
  setup() {
    const toast = useToast();
    const recordings = ref([]);
    const wavesurfer = ref(null);
    const recordPlugin = ref(null);
    const chunkInterval = ref(null);
    const isRecording = ref(false);
    const isPaused = ref(false);
    const timer = ref(0);
    const intervalId = ref(null);

    const formattedTime = computed(() => {
      const minutes = Math.floor(timer.value / 60);
      const seconds = timer.value % 60;
      return `${ minutes.toString().padStart(2, '0') }:${ seconds.toString().padStart(2, '0') }`;
    });

    const startTimer = () => {
      if (intervalId.value) return;
      intervalId.value = setInterval(() => {
        timer.value += 1;
      }, 1000);
    };

    const stopTimer = () => {
      clearInterval(intervalId.value);
      intervalId.value = null;
    };

    const resetTimer = () => {
      stopTimer();
      timer.value = 0;
    };

    const createWaveSurfer = () => {
      wavesurfer.value = WaveSurfer.create({
        container: '#waveform',
        waveColor: '#00bfff',
        progressColor: '#1e3a8a',
        cursorColor: '#00bfff'
      });

      recordPlugin.value = wavesurfer.value.registerPlugin(RecordPlugin.create({
        renderRecordedAudio: false
      }));

      recordPlugin.value.on('record-end', async (blob) => {
        const name = new Date().toLocaleString();
        await saveFullRecording(blob, name);
        await loadRecordings();
        resetTimer();
      });

      loadRecordings();
    };

    const toggleRecording = async () => {
      if (isRecording.value || isPaused.value) {
        recordPlugin.value.stopRecording();
        clearInterval(chunkInterval.value);
        document.querySelector('#record').textContent = 'Record';
        document.querySelector('#pause').style.display = 'none';
        isRecording.value = false;
        stopTimer();
      } else {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        recordPlugin.value.startRecording({ stream });
        document.querySelector('#record').textContent = 'Save';
        document.querySelector('#pause').style.display = 'inline';
        isRecording.value = true;
        startTimer();
      }
    };

    const togglePause = () => {
      if (recordPlugin.value.isPaused()) {
        recordPlugin.value.resumeRecording();
        document.querySelector('#pause').textContent = 'Pause';
        startTimer();
      } else {
        recordPlugin.value.pauseRecording();
        document.querySelector('#pause').textContent = 'Resume';
        stopTimer();
      }
    };

    const saveFullRecording = async (blob, name) => {
      const formData = new FormData();
      formData.append('audio', blob, 'fullRecording.wav');
      formData.append('name', name);
      try {
        await axios.post('/api/full-recording', formData);
        toast.success('Recording saved successfully!');
        loadRecordings();
      } catch (error) {
        console.error('Error saving full recording:', error);
      }
    };

    const deleteRecording = async (id) => {
      try {
        await axios.delete(`/api/recordings/${ id }`);
        toast.success('Recording deleted successfully!');
        loadRecordings();
      } catch (error) {
        console.error('Error deleting recording:', error);
      }
    };

    const saveRecordingName = async (id, name) => {
      try {
        await axios.put(`/api/recordings/${ id }`, { name });
        toast.success('Recording name updated successfully!');
      } catch (error) {
        console.error('Error updating recording name:', error);
      }
    };

    const loadRecordings = async () => {
      try {
        const response = await axios.get('/api/recordings');
        recordings.value = response.data;
        recordings.value.forEach(recording => {
          setTimeout(() => createWaveSurferInstance(recording), 0);
        });
      } catch (error) {
        console.error('Error fetching recordings:', error);
      }
    };

    const createWaveSurferInstance = (recording) => {
      const container = document.querySelector(`#waveform-${ recording.id }`);
      container.innerHTML = '';
      const wavesurferInstance = WaveSurfer.create({
        container,
        waveColor: '#00bfff',
        progressColor: '#1e3a8a',
        cursorColor: '#00bfff',
        url: recording.url,
        interact: false
      });

      const audioElement = document.querySelector(`audio[src="${ recording.url }"]`);

      wavesurferInstance.on('ready', () => wavesurferInstance.setVolume(0));
      wavesurferInstance.on('seek', (progress) => audioElement.currentTime = progress * audioElement.duration);
      audioElement.addEventListener('play', () => wavesurferInstance.play());
      audioElement.addEventListener('pause', () => wavesurferInstance.pause());
      audioElement.addEventListener('timeupdate', () => {
        if (!wavesurferInstance.isPlaying()) {
          wavesurferInstance.seekTo(audioElement.currentTime / audioElement.duration);
        }
      });
    };

    onMounted(() => {
      createWaveSurfer();
      loadRecordings();
    });

    return {
      toggleRecording,
      togglePause,
      recordings,
      saveRecordingName,
      deleteRecording,
      formattedTime
    };
  }
};
</script>
