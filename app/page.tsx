import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/background.png"
          alt="background"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(rgba(59, 37, 89, 0.75), rgba(101, 55, 166, 0.75))",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/dust.png')",
            backgroundSize: "200px 200px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>
      <main className="min-h-screen flex flex-col gap-20 md:gap-50 overflow-x-hidden">
        <Navbar />
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-20">
          <About />
        </section>
      </main>
    </>
  );
}