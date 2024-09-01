import Image from "next/image";
import Navbar from "@/components/Navbar";
import Homepage from "@/components/Homepage";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="px-32">
    <Homepage />
    </div>
    </>
  )
}
