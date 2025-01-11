export interface YoutubePlaylistListResponse {
  kind: "youtube#playlistListResponse";
  etag: string;
  nextPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YoutubePlaylist[];
}

interface YoutubePlaylist {
  kind: "youtube#playlist";
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
      standard: {
        url: string;
        width: number;
        height: number;
      };
      maxres: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    localized: {
      title: string;
      description: string;
    };
  };
  contentDetails: {
    itemCount: number;
  };
}

export type Query = Partial<{
  part: string;
  maxResults: string;
  key: string;
  access_token: string;
  pageToken: string;
  mine: string;
  channelId: string;
  [key: string]: string | undefined;
}>;

export type ErrorFetchPlaylist = {
  error: {
    code: number;
    message: string;
  };
};
