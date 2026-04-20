import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";

export default function Home() {
  return (
    <>
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url('/images/dust.png'),
            linear-gradient(rgba(59, 37, 89, 0.75), rgba(101, 55, 166, 0.75)),
            url('/images/background.png')`,
          backgroundSize: '200px 200px, cover, cover',
          backgroundRepeat: 'repeat, no-repeat, no-repeat',
          backgroundPosition: 'center, center, center',
        }}
      />
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