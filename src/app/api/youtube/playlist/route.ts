import { PLAYLIST_PER_PAGE } from "@/lib/constants";
import { Query } from "@/lib/response/fetchPlaylist";
import { NextRequest } from "next/server";
import qs from "qs";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const apiToken = process.env.YOUTUBE_API_KEY;

  const query: Query = {
    part: "snippet,contentDetails",
    maxResults: PLAYLIST_PER_PAGE,
    key: apiToken,
  };

  for (const [key, value] of searchParams) {
    query[key] = value;
  }
  try {
    const rs = qs.stringify(query, { addQueryPrefix: true });
    const res = await fetch(
      "https://www.googleapis.com/youtube/v3/playlists" + rs,
      {
        headers: {
          Authorization: `Bearer ${query.access_token}`,
        },
      }
    );
    const data = await res.json();
    console.log(data);
    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json("Error fetching playlist");
  }
}
