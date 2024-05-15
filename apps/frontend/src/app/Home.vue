<template>
  <div class="nx-welcome text-center font-sans p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-md max-w-xl mx-auto mt-12">
    <h2 class="text-3xl font-bold text-gray-900 mb-5">Audio Store</h2>
    <div class="flex justify-center gap-4 mb-5">
      <button id="record" class="btn start bg-green-600 text-white py-2 px-6 rounded-xl hover:bg-green-700" @click="toggleRecording">
        Record
      </button>
      <button id="pause" class="btn stop bg-yellow-500 text-white py-2 px-6 rounded-xl hover:bg-yellow-600" @click="togglePause" style="display:none;">
        Pause
      </button>
    </div>

    <div id="waveform" class="mb-5 h-32 bg-white rounded-lg shadow-inner"></div>
    <div id="progress" class="text-xl text-gray-700 mb-5">00:00</div>

    <h3 class="text-2xl font-medium text-gray-800 mb-5">Recordings</h3>
    <ul class="list-none" id="recordings">
      <li v-for="recording in recordings" :key="recording.id" class="recording-card bg-white rounded-lg shadow-md p-4 mb-3">
        <div class="flex items-center justify-between mb-2">
          <input
            type="text"
            v-model="recording.name"
            placeholder="Enter recording name"
            class="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <button class="btn save bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 ml-3 mb-2" @click="saveRecordingName(recording.id, recording.name)">
            Save
          </button>
          <button class="btn delete bg-red-400 text-white py-2 px-4 rounded-xl hover:bg-red-500 ml-3 mb-2" @click="deleteRecording(recording.id)">
            Delete
          </button>
        </div>
        <div :id="'waveform-' + recording.id" class="waveform-instance mb-3"></div>
        <audio :src="recording.url" controls class="w-full rounded-lg" @play="playWaveform(recording.id)"
               @pause="pauseWaveform(recording.id)" @timeupdate="syncWaveform(recording.id, $event)">
        </audio>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import WaveSurfer from 'wavesurfer.js';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.esm.js';

export default {
  name: 'NxWelcome',
  setup() {
    const recordings = ref([]);
    const wavesurfer = ref(null);
    const recordPlugin = ref(null);
    const audioChunks = ref([]);
    const chunkInterval = ref(null);
    const isRecording = ref(false);
    const isPaused = ref(false);
    const scrollingWaveform = ref(false);

    const createWaveSurfer = () => {
      wavesurfer.value = WaveSurfer.create({
        container: '#waveform',
        waveColor: '#00bfff',
        progressColor: '#1e3a8a',
      });

      recordPlugin.value = wavesurfer.value.registerPlugin(RecordPlugin.create({
        scrollingWaveform: scrollingWaveform.value,
        renderRecordedAudio: false,
      }));

      recordPlugin.value.on('record-end', (blob) => {
        const name = new Date().toLocaleString();
        saveFullRecording(blob, name);
        loadRecordings();
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
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      recordPlugin.value.startRecording({ stream });
      isRecording.value = true;
      document.querySelector('#record').textContent = 'Save';
      document.querySelector('#pause').style.display = 'inline';

      chunkInterval.value = setInterval(() => {
        if (recordPlugin.value.isRecording()) {
          recordPlugin.value.requestData();
          const chunk = audioChunks.value.pop();
          if (chunk) sendAudioChunk(chunk);
        }
      }, 5000);
    };

    const togglePause = () => {
      if (recordPlugin.value.isPaused()) {
        recordPlugin.value.resumeRecording();
        document.querySelector('#pause').textContent = 'Pause';
      } else {
        recordPlugin.value.pauseRecording();
        document.querySelector('#pause').textContent = 'Resume';
      }
    };

    const sendAudioChunk = async (chunk) => {
      const formData = new FormData();
      formData.append('audio', chunk, 'chunk.wav');
      try {
        await axios.post('/api/audio-chunk', formData);
      } catch (error) {
        console.error('Error sending audio chunk:', error);
      }
    };

    const saveFullRecording = async (blob, name) => {
      const formData = new FormData();
      formData.append('audio', blob, 'fullRecording.wav');
      formData.append('name', name);
      try {
        await axios.post('/api/full-recording', formData);
        audioChunks.value = [];
      } catch (error) {
        console.error('Error saving full recording:', error);
      }
    };

    const deleteRecording = async (id) => {
      try {
        await axios.delete(`/api/recordings/${id}`);
        loadRecordings();
      } catch (error) {
        console.error('Error deleting recording:', error);
      }
    };

    const saveRecordingName = async (id, name) => {
      try {
        await axios.put(`/api/recordings/${id}`, { name });
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
      const container = document.querySelector(`#waveform-${recording.id}`);
      container.innerHTML = '';
      const wavesurferInstance = WaveSurfer.create({
        container,
        waveColor: '#00bfff',
        progressColor: '#1e3a8a',
        url: recording.url,
        interact: false,
      });

      const audioElement = document.querySelector(`audio[src="${recording.url}"]`);

      wavesurferInstance.on('ready', () => {
        wavesurferInstance.setVolume(0);
      });

      wavesurferInstance.on('seek', (progress) => {
        audioElement.currentTime = progress * audioElement.duration;
      });

      audioElement.addEventListener('play', () => {
        wavesurferInstance.play();
      });

      audioElement.addEventListener('pause', () => {
        wavesurferInstance.pause();
      });

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
      scrollingWaveform,
      saveRecordingName,
      deleteRecording
    };
  },
};
</script>
