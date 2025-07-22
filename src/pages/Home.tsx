import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import HeroFeatures from "../components/HeroFeatures";

export default function Home() {
  return (
    <main className="mx-auto flex flex-col">
      <Carousel />
      <Hero />
      <HeroFeatures />
    </main>
  );
}
