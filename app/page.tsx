import Image from "next/image";
import { Project } from '@/types';
import { promises as fs } from 'fs';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Tech_n_Skills from "./components/tech-n-skills";
import Projects from "./components/projects";


let projects: Project[] = [];
    try {
        const file = await fs.readFile(process.cwd() + '/public/projects.json', 'utf-8');
        projects = JSON.parse(file) as Project[];
    } catch (err) {
        console.error('FAILED TO READ:', err);
    }

export default async function Home() {
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
            backgroundImage: "url('/images/Dust.png')",
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
        <section id="technologies-&-skills">
          <Tech_n_Skills />
        </section>
        <section id="projects">
          <Projects projects={projects} />
        </section>
      </main>
    </>
  );
}