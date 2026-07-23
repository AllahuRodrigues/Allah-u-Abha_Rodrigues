import SmoothScroll from "@/components/studio/SmoothScroll";
import Cursor from "@/components/studio/Cursor";
import Nav from "@/components/studio/Nav";
import Hero from "@/components/studio/Hero";
import Marquee from "@/components/studio/Marquee";
import About from "@/components/studio/About";
import Now from "@/components/studio/Now";
import Gallery from "@/components/studio/Gallery";
import Work from "@/components/studio/Work";
import Strip from "@/components/studio/Strip";
import Contact from "@/components/studio/Contact";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <a
        href="#gallery"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-paper focus:px-3 focus:py-2 focus:font-mono focus:text-xs"
      >
        Skip to the gallery
      </a>
      <Nav />
      <main>
        <Hero />
        <Marquee
          items={[
            "engineer × artist",
            "Maputo → Porto → Lakeville → New Haven → San Francisco",
            "graphite · acrylic · code",
            "in The Wall Street Journal, via the Yale Hacker House",
          ]}
        />
        <About />
        <Gallery />
        <Marquee
          items={[
            "the current medium is code",
            "ml · full-stack · maps",
            "b.s. computer science + statistics & data science, yale",
          ]}
          speed="36s"
        />
        <Work />
        <Now />
        <Strip />
      </main>
      <Contact />
    </>
  );
}
