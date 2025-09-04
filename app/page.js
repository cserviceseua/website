import Hero from "./components/Hero";
import WorkingProcess from "./components/WorkingProcess";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Included from "./components/Included";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import FinalCta from "./components/FinalCta";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <WorkingProcess />
      <Services />
      <Gallery />
      <Included />
      <WhyChoose />
      <Testimonials />
      <FinalCta />
    </div>
  );
}
