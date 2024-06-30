import Layout from "../components/Layout";
import About from "../components/About";
import Navbar from "../components/Navbar";
import { Contact } from "@/components/Contact";
import Proyects from "@/components/Proyects";
import ParticleBg from "@/components/ParticleBg";
export default function Home() {
  // reproducir audio en segundo plano
  

  return (
    <>
    <Navbar />
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="layout-page">
        <ParticleBg/>
        
        <Layout />
        <About />

        <Proyects />
        <Contact />
      </div>
    </main>
    </>
  );
}
