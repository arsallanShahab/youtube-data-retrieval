"use client";

import { fetchPlaylists } from "@/lib/api/fetchPlaylist";
import { PLAYLIST_PER_PAGE } from "@/lib/constants";
import {
  ErrorFetchPlaylist,
  YoutubePlaylistListResponse,
} from "@/lib/response/fetchPlaylist";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import FlexContainer from "../system/flex-container";

export default function Playlist({ accessToken }: { accessToken: string }) {
  const searchParams = useSearchParams();
  const [nextPageToken, setNextPageToken] = useState<string>("");
  const [totalResults, setTotalResults] = useState<number>(
    parseInt(PLAYLIST_PER_PAGE)
  );

  const { data, isFetched, isError } = useQuery(
    ["playlists", searchParams.get("channelId"), nextPageToken],
    (): Promise<YoutubePlaylistListResponse | ErrorFetchPlaylist> =>
      fetchPlaylists({
        accessToken: accessToken,
        channelId: searchParams.get("channelId")!,
        nextPageToken: nextPageToken,
      })
  );
  if (!isFetched) {
    return (
      <FlexContainer variant="row-center" className="py-10">
        <Loader size={32} className="animate-spin" />
      </FlexContainer>
    );
  }
  if (isError || (data as ErrorFetchPlaylist).error) {
    return (
      <FlexContainer variant="row-center" className="py-10">
        <h1 className="text-2xl font-geist-mono text-red-500">
          {(data as ErrorFetchPlaylist)?.error?.message ||
            "Error fetching playlist"}
        </h1>
      </FlexContainer>
    );
  }

  console.log(totalResults);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full border-none outline-none">
      {(data as YoutubePlaylistListResponse)?.items &&
        (data as YoutubePlaylistListResponse)?.items.map((playlist) => (
          <FlexContainer
            variant="column-start"
            key={playlist.id}
            className="p-2 bg-zinc-100 rounded-xl"
          >
            <Image
              src={playlist.snippet.thumbnails.high.url}
              alt={playlist.snippet.title}
              width={1280}
              height={720}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h1 className="font-geist-mono text-lg font-medium">
              {playlist.snippet.title}
            </h1>
          </FlexContainer>
        ))}
      {data &&
        (data as YoutubePlaylistListResponse).nextPageToken &&
        totalResults <
          (data as YoutubePlaylistListResponse).pageInfo.totalResults && (
          <button
            onClick={() => {
              setNextPageToken(
                (data as YoutubePlaylistListResponse).nextPageToken!
              );
              setTotalResults(totalResults + parseInt(PLAYLIST_PER_PAGE));
            }}
            className="px-5 py-5 bg-red-500 border-red-200 h-auto rounded-[40px] text-white hover:bg-red-600 hover:scale-105 duration-200 cursor-pointer font-geist-mono text-3xl"
          >
            Load more
          </button>
        )}
    </div>
  );
}
