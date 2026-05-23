import { Backdrop } from "@/components/Backdrop";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Research } from "@/components/Research";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Backdrop />
      <main className="relative">
        <Nav />
        <Hero />
        <Research />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
