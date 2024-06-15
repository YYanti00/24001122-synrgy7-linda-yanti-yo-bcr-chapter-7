import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Fragments/Footer";
import NavbarUser from "../components/Fragments/NavbarUser";
import Highlights from "../components/Fragments/Highlights";
import TestimonialSection from "../components/Fragments/TestimonialSection";
import FAQSection from "../components/Fragments/FAQSection";
import WhyusSection from "../components/Fragments/WhyusSection";
import ServiceSection from "../components/Fragments/ServiceSection";
import SewaSection from "../components/Fragments/SewaSection";

function Home() {
  Aos.init();
  return (
    <>
      <NavbarUser />
      <Highlights />
      <main>
        <ServiceSection />
        <WhyusSection />
        <TestimonialSection />
        <SewaSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
