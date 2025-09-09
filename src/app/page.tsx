import ContainterServicos from "@/components/Home/ConteudosSection";
import Footer from "@/components/Footer";
import PlanosSection from "@/components/Home/PlanosSection";
import ObjetivosSection from "@/components/Home/ObjetivosSection";
import HeroSection from "@/components/Home/HeroSection";
import CallToAction from "@/components/Home/CallToAction";
import SobreSection from "@/components/Home/SobreSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ObjetivosSection />
      <ContainterServicos />
      <CallToAction />
      <SobreSection />
      <PlanosSection />
      <Footer />
    </div>
  );
}
