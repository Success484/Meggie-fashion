import Header from "@/components/Header";
import NewArrival from "@/components/NewArrival";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <NewArrival />
    </main>
  );
}
