import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: ` url('/images/dust.png'),
          linear-gradient(rgba(59, 37, 89, 0.75), rgba(101, 55, 166, 0.75)),
          url('/images/background.png')`,
        backgroundSize: '200px 200px, cover, cover',
        backgroundRepeat: 'repeat, no-repeat, no-repeat',
        backgroundPosition: 'center, center, center',
        backgroundAttachment: 'fixed',
      }}
      className="min-h-screen"
    >
      <Navbar />
      <Hero />
      <br />
      <About />
    </main>
  );
}
