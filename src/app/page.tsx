import { auth } from "@/auth";
import Form from "@/components/homepage/form";
import Playlist from "@/components/homepage/playlist";
import FlexContainer from "@/components/system/flex-container";

export default async function Home() {
  const session = await auth();

  if (session === null) {
    return (
      <FlexContainer
        variant="column-center"
        className="py-10 pt-16 px-5"
        gap="sm"
      >
        <h1 className="text-2xl font-geist-mono text-red-500">
          Not authenticated yet
        </h1>
        <p>Please sign in to access the playlist.</p>
      </FlexContainer>
    );
  }

  return (
    <FlexContainer
      variant="column-start"
      alignItems="center"
      className="min-h-[80vh] py-10 px-5"
      gap="3xl"
    >
      <Form />
      <Playlist accessToken={session?.user.accessToken as string} />
    </FlexContainer>
  );
}
