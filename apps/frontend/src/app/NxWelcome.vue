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

export default {
  name: 'NxWelcome',
  setup() {
    const mediaRecorder = ref(null);
    const audioChunks = ref([]);
    const recordings = ref([]);

    const loadRecordings = async () => {
      try {
        const response = await axios.get('/api/recordings');
        recordings.value = response.data;
      } catch (error) {
        console.error('Error fetching recordings:', error);
      }
    };

    const startRecording = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder.value = new MediaRecorder(stream);

        mediaRecorder.value.ondataavailable = (event) => {
          audioChunks.value.push(event.data);
        };

        mediaRecorder.value.onstop = async () => {
          await saveFullRecording();
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
</style>
