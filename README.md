# Audio Store Application

✨ **This project has been bootstrapped with [Nx, Smart Monorepos · Fast CI](https://nx.dev) and was created as a technical assessment. The project is a Fullstack JavaScript application focusing on audio capture, storage and visualisation. There was a 48 hour deadline and it's development generally went smoothly.** ✨

## Overview

Audio Store allows you to record audio from your PC microphone, visualize the audio waveform as well as store and retrieve the recordings. It includes a Vue.js frontend and a Node.js backend (Express) connected to a local PostgreSQL database. The application is ready to be containerized using Docker and orchestrated with Docker Compose.

## Table of Contents

- [Overview](#overview)
- [Setup](#start-the-application)
- [Development](#development)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Database](#database)
  - [API Endpoints](#api-endpoints)
- [Access the Application](#access-the-application)
- [License](#license)

## Start the application

Clone the repo (https://github.com/dsampson94/audio-store.git)

Navigate to file

cd C:\Users\daves\IdeaProjects\audio-store>

- Run `nx serve frontend` to start the frontend app.

- Run `nx serve backend` to start the frontend app.

## Build the application

- Run `nx build frontend` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

- Run `nx build backend` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Development

## Frontend

The frontend is built with Vue.js and is located in the frontend directory. It includes the following key features:

    Audio Recording: Capture audio from the microphone.
    Waveform Visualization: Display an audio waveform in real-time.
    Recordings Management: View, play, download and delete previous recordings.

Libraries Used

    Vue
    Tailwind
    Wavesurfer.js

## Backend

The backend is built with Node.js and Express and is located in the backend directory. It provides REST APIs for managing audio recordings and chunks.

Libraries Used

    Express
    Busboy
    PostgreSQL

## Database

It uses PostgreSQL to store audio chunks and complete recordings. The database configuration is defined in the docker-compose.yml file. The chunking functionality was not achieved.

Database Details

    Database Name: audio_store

Database Tables

    full_recordings: Stores complete recordings.
    audio_chunks: Stores individual audio chunks.

## API Endpoints

    GET /api/recordings: Retrieve all recordings.
    GET /api/recordings/:id: Retrieve a single recording by ID.
    POST /api/full-recording: Upload a complete recording.
    PUT /api/recordings/:id: Update the name of a recording.
    DELETE /api/recordings/:id: Delete a recording.

## Access the application:

    Frontend: http://localhost:5173
    Backend: http://localhost:3000

## License

MIT
