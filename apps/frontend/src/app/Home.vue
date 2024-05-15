<template>
  <div class="nx-welcome text-center font-sans p-8 bg-gray-100 rounded-lg shadow-md max-w-xl mx-auto mt-12">
    <h2 class="text-2xl font-semibold text-gray-800 mb-5">Audio Recorder</h2>
    <div class="flex justify-center gap-4 mb-5">
      <button class="btn start bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" @click="startRecording">
        Start Recording
      </button>
      <button class="btn stop bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" @click="stopRecording">
        Stop Recording
      </button>
    </div>

    <div id="waveform" class="mb-5"></div>

    <h3 class="text-xl font-medium text-gray-700 mb-5">Recordings</h3>
    <ul class="list-none p-0">
      <li v-for="recording in recordings" :key="recording.id" class="recording-card bg-white rounded-lg shadow-sm p-5 mb-5 flex items-center">
        <audio :src="recording.url" controls class="w-full mb-2 rounded"></audio>
        <button class="btn delete bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 ml-3 mb-2" @click="deleteRecording(recording.id)">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
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
    const record = ref(null);
    let scrollingWaveform = false;

    const loadRecordings = async () => {
      try {
        const response = await axios.get('/api/recordings');
        recordings.value = response.data;
      } catch (error) {
        console.error('Error fetching recordings:', error);
      }
    };

    const initWaveSurfer = () => {
      wavesurfer.value = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'rgb(200, 0, 200)',
        progressColor: 'rgb(100, 0, 100)',
      });

      record.value = wavesurfer.value.registerPlugin(RecordPlugin.create({ scrollingWaveform, renderRecordedAudio: false }));

      record.value.on('record-end', (blob) => {
        const container = document.querySelector('#recordings');
        const recordedUrl = URL.createObjectURL(blob);

        const newWavesurfer = WaveSurfer.create({
          container,
          waveColor: 'rgb(200, 100, 0)',
          progressColor: 'rgb(100, 50, 0)',
          url: recordedUrl,
        });

        const button = container.appendChild(document.createElement('button'));
        button.textContent = 'Play';
        button.onclick = () => newWavesurfer.playPause();
        newWavesurfer.on('pause', () => (button.textContent = 'Play'));
        newWavesurfer.on('play', () => (button.textContent = 'Pause'));

        const link = container.appendChild(document.createElement('a'));
        Object.assign(link, {
          href: recordedUrl,
          download: 'recording.' + blob.type.split(';')[0].split('/')[1] || 'webm',
          textContent: 'Download recording',
        });
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

          await saveFullRecording(blob);
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

    const saveFullRecording = async (blob) => {
      const formData = new FormData();
      formData.append('audio', blob, 'fullRecording.wav');
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
    };
  },
};
</script>

<style scoped>
/* Tailwind CSS will handle the styles */
</style>
