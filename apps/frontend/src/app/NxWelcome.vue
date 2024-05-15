<template>
  <div class="nx-welcome">
    <h2>Audio Recorder</h2>
    <button @click="startRecording">Start Recording</button>
    <button @click="stopRecording">Stop Recording</button>

    <h3>Recordings</h3>
    <ul>
      <li v-for="recording in recordings" :key="recording.id">
        <audio :src="recording.url" controls></audio>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import WaveSurfer from 'wavesurfer.js';

export default {
  name: 'NxWelcome',
  setup() {
    const mediaRecorder = ref(null);
    const audioChunks = ref([]);
    const waveform = ref(null);
    const recordings = ref([]);

    const loadRecordings = async () => {
      try {
        const response = await axios.get('/api/recordings');
        recordings.value = response.data.map(recording => ({
          id: recording.id,
          url: `data:audio/wav;base64,${recording.data}`,
        }));
      } catch (error) {
        console.error('Error fetching recordings:', error);
      }
    };

    const initWaveform = () => {
      waveform.value = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple'
      });
    };

    const startRecording = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder.value = new MediaRecorder(stream);

        mediaRecorder.value.ondataavailable = (event) => {
          audioChunks.value.push(event.data);
          if (mediaRecorder.value?.state === 'recording') {
            setTimeout(() => sendAudioChunk(event.data), 5000);
          }
        };

        mediaRecorder.value.onstop = async () => {
          await saveFullRecording();
          loadRecordings();
        };

        mediaRecorder.value.start();
        initWaveform();
        waveform.value.microphone = WaveSurfer.microphone.create({
          mediaStream: stream,
        });
        waveform.value.microphone.start();
      } catch (error) {
        console.error('Error starting recording:', error);
      }
    };

    const stopRecording = () => {
      mediaRecorder.value?.stop();
      waveform.value.microphone.stop();
    };

    const sendAudioChunk = async (chunk) => {
      const formData = new FormData();
      formData.append('audio', chunk, 'chunk.wav');
      try {
        await axios.post('/api/audio-chunk', formData);
      } catch (error) {
        console.error('Error uploading audio chunk:', error);
      }
    };

    const saveFullRecording = async () => {
      const blob = new Blob(audioChunks.value, { type: 'audio/wav' });
      const formData = new FormData();
      formData.append('audio', blob, 'fullRecording.wav');
      try {
        await axios.post('/api/full-recording', formData);
        audioChunks.value = [];
      } catch (error) {
        console.error('Error saving full recording:', error);
      }
    };

    return {
      startRecording,
      stopRecording,
      recordings,
      loadRecordings,
    };
  },
  mounted() {
    this.loadRecordings();
  },
};
</script>

<style scoped>
.nx-welcome {
  text-align: center;
}

button {
  margin: 5px;
}

h3 {
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

audio {
  display: block;
  margin: 10px 0;
}

#waveform {
  width: 600px;
  height: 100px;
  margin: 0 auto;
}
</style>
