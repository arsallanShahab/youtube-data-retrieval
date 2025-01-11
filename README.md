# YouTube Playlist Retriever

A simple app to retrieve YouTube playlists using Next.js, Tailwind CSS, and NextAuth for authentication.

## Description

YouTube Playlist Retriever is a web application that allows users to authenticate with their Google account and retrieve their YouTube playlists. The app is built with Next.js, Tailwind CSS, and NextAuth for authentication.

## Features

- Google authentication using NextAuth
- Retrieve and display YouTube playlists
- Responsive design with Tailwind CSS
- Server-side rendering with Next.js

## Security

- Environment variables are used to store sensitive information such as API keys and client secrets.
- Authentication is handled using NextAuth with Google as the provider.
- The app uses secure API calls to fetch YouTube playlists.

## APIs

### Authentication API

- **Endpoint:** `/api/auth/[...nextauth]/route.ts`
- **Description:** Handles authentication using NextAuth with Google as the provider.

### YouTube Playlist API

- **Endpoint:** `/api/youtube/playlist/route.ts`
- **Description:** Fetches YouTube playlists for the authenticated user.

## Environment Variables

The following environment variables are required:

- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `NEXTAUTH_URL`
- `YOUTUBE_API_KEY`
- `AUTH_SECRET`

Refer to the `.env.example` file for more details.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`
3. Create a `.env` file based on the `.env.example` file and fill in the required values.
4. Run the development server: `npm run dev`

## Build

To build the project, run:

```sh
npm run build
```
