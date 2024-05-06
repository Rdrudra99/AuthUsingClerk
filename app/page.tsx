import Navbar from "@/components/Navbar";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
export default function Home() {
  return (
    <main className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col justify-center items-center text-center">
        Home Page
      </div>
    </main>
  );
}
