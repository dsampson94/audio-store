<template>
  <div class="nx-welcome">
    <h2>Audio Recorder</h2>
    <div class="button-container">
      <button class="btn start" @click="startRecording">Start Recording</button>
      <button class="btn stop" @click="stopRecording">Stop Recording</button>
    </div>

    <h3>Recordings</h3>
    <ul class="recordings-list">
      <li v-for="recording in recordings" :key="recording.id" class="recording-card">
        <audio :src="recording.url" controls></audio>
        <button class="btn delete" @click="deleteRecording(recording.id)">Delete</button>
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

    const deleteRecording = async (id) => {
      try {
        await axios.delete(`/api/recordings/${id}`);
        loadRecordings();
      } catch (error) {
        console.error('Error deleting recording:', error);
      }
    };

    return {
      startRecording,
      stopRecording,
      recordings,
      loadRecordings,
      deleteRecording,
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
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 50px auto;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

h3 {
  margin-top: 20px;
  color: #555;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.btn {
  padding: 13px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn.start {
  background-color: #4caf50;
  color: white;
}

.btn.stop {
  background-color: #f44336;
  color: white;
}

.btn.delete {
  background-color: #ff5722;
  color: white;
  margin: -10px 0 0 10px;
}

.btn:hover {
  opacity: 0.9;
}

.recordings-list {
  list-style-type: none;
  padding: 0;
}

.recording-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

audio {
  width: 100%;
  margin-bottom: 10px;
}
</style>
