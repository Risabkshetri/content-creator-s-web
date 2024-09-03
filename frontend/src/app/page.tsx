import Image from "next/image";
import Navbar from "@/components/Navbar";
import Homepage from "@/components/home/Homepage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="md:px-32 px-1">
    <Homepage />
    </div>
    <Footer />
    </>
  )
}
