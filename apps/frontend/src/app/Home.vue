<template>
  <div class="nx-welcome text-center font-sans p-6 bg-blue-50 rounded-xl shadow-md max-w-xl mx-auto mt-12">
    <h2 class="text-2xl font-semibold text-gray-800 mb-5">Audio Recorder</h2>
    <div class="flex justify-center gap-4 mb-5">
      <button class="btn start bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800" @click="startRecording">
        Start Recording
      </button>
      <button class="btn stop bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" @click="stopRecording">
        Stop Recording
      </button>
    </div>

    <div id="waveform" class="mb-5"></div>

    <h3 class="text-xl font-medium text-gray-700 mb-5">Recordings</h3>
    <ul class="list-none">
      <li v-for="recording in recordings" :key="recording.id"
          class="recording-card bg-white rounded-lg shadow-md p-4 mb-3">
        <div class="flex items-center justify-between mb-2">
          <input
            type="text"
            v-model="recording.name"
            placeholder="Enter recording name"
            class="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <button class="btn save bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ml-3 mb-2"
                  @click="saveRecordingName(recording.id, recording.name)">
            Save
          </button>
          <button class="btn delete bg-red-400 text-white py-2 px-4 rounded hover:bg-red-500 ml-3 mb-2"
                  @click="deleteRecording(recording.id)">
            Delete
          </button>
        </div>
        <div :id="'waveform-' + recording.id"></div>
        <audio :src="recording.url" controls class="w-full rounded" @play="playWaveform(recording.id)"
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
    const mediaRecorder = ref(null);
    const audioChunks = ref([]);
    const recordings = ref([]);
    const wavesurfer = ref(null);
    const recordPlugin = ref(null);
    const wavesurfers = ref({});
    let scrollingWaveform = false;

    const loadRecordings = async () => {
      try {
        const response = await axios.get('/api/recordings');
        recordings.value = response.data;
        recordings.value.forEach(recording => {
          setTimeout(() => createWaveSurfer(recording), 0);
        });
      } catch (error) {
        console.error('Error fetching recordings:', error);
      }
    };

    const initWaveSurfer = () => {
      wavesurfer.value = WaveSurfer.create({
        container: '#waveform',
        waveColor: '#00bfff',  // light blue
        progressColor: '#1e3a8a',  // dark blue
        interact: false
      });

      recordPlugin.value = wavesurfer.value.registerPlugin(RecordPlugin.create({
        scrollingWaveform,
        renderRecordedAudio: false
      }));

      recordPlugin.value.on('record-end', (blob) => {
        const recordedUrl = URL.createObjectURL(blob);
        const name = new Date().toLocaleString(); // Set the default name as the formatted date and time
        saveFullRecording(blob, name);
        loadRecordings();
      });
    };

    const startRecording = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder.value = new MediaRecorder(stream);

        mediaRecorder.value.ondataavailable = (event) => {
          audioChunks.value.push(event.data);
        };

        mediaRecorder.value.onstop = async () => {
          const blob = new Blob(audioChunks.value, { type: 'audio/wav' });
          const url = URL.createObjectURL(blob);
          wavesurfer.value.load(url);

          const name = new Date().toLocaleString(); // Set the default name as the formatted date and time
          await saveFullRecording(blob, name);
          loadRecordings();
        };

        mediaRecorder.value.start();
      } catch (error) {
        console.error('Error starting recording:', error);
      }
    };

    const stopRecording = () => {
      mediaRecorder.value?.stop();
    };

    const saveFullRecording = async (blob, name) => {
      const formData = new FormData();
      formData.append('audio', blob, 'fullRecording.wav');
      formData.append('name', name); // Append the name to the form data
      try {
        await axios.post('/api/full-recording', formData);
        audioChunks.value = [];
      } catch (error) {
        console.error('Error saving full recording:', error);
      }
    };

    const deleteRecording = async (id) => {
      try {
        await axios.delete(`/api/recordings/${ id }`);
        loadRecordings();
      } catch (error) {
        console.error('Error deleting recording:', error);
      }
    };

    const saveRecordingName = async (id, name) => {
      try {
        await axios.put(`/api/recordings/${ id }`, { name });
      } catch (error) {
        console.error('Error updating recording name:', error);
      }
    };

    const createWaveSurfer = (recording) => {
      const container = document.querySelector(`#waveform-${ recording.id }`);
      container.innerHTML = ''; // Clear existing waveform if any
      const wavesurferInstance = WaveSurfer.create({
        container,
        waveColor: '#00bfff',  // light blue
        progressColor: '#1e3a8a',  // dark blue
        url: recording.url,
        interact: false
      });

      const audioElement = document.querySelector(`audio[src="${ recording.url }"]`);

      wavesurferInstance.on('ready', () => {
        wavesurferInstance.setVolume(0); // Mute the wavesurfer instance to avoid double audio
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

      wavesurfers.value[recording.id] = wavesurferInstance;
    };

    onMounted(() => {
      loadRecordings();
      initWaveSurfer();
    });

    return {
      startRecording,
      stopRecording,
      recordings,
      loadRecordings,
      deleteRecording,
      saveRecordingName
    };
  }
};
</script>

<style scoped>
/* Tailwind CSS will handle the styles */
</style>
