import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default async function SignIn() {
  const session = await auth();

  if (!session?.user) {
    return (
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <Button className="font-geist-mono" type="submit">
          Signin with Google
        </Button>
      </form>
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="py-2 px-2.5 pr-3 bg-zinc-100 rounded-3xl text-xs font-geist-mono hover:bg-zinc-200 cursor-pointer h-auto"
        >
          {" "}
          <Image
            src={
              session.user.image ?? "https://picsum.photos/seed/picsum/700/700"
            }
            alt={session.user.name ?? "user"}
            width={150}
            height={150}
            className="w-7 h-7 rounded-3xl"
          />{" "}
          {session.user.email}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={async () => {
            "use server";
            await signOut();
          }}
        >
          log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
