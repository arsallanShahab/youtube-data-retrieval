import { Query, YoutubePlaylistListResponse } from "../response/fetchPlaylist";

interface FetchPlaylistsParams {
  accessToken: string;
  nextPageToken?: string;
  mine?: string;
  channelId?: string;
}

export const fetchPlaylists = async ({
  accessToken,
  channelId,
  nextPageToken,
  mine = "true",
}: FetchPlaylistsParams): Promise<YoutubePlaylistListResponse> => {
  const query: Query = {
    access_token: accessToken,
    ...(nextPageToken && { pageToken: nextPageToken }),
    ...(channelId ? { channelId } : { mine }),
  };

  const queryString = new URLSearchParams(
    query as Record<string, string>
  ).toString();
  const url = `/api/youtube/playlist?${queryString}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching playlists: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching playlists:", error);
    throw error;
  }
};
