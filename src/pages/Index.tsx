import Snowfall from "@/components/Snowfall";
import ChristmasHero from "@/components/ChristmasHero";
import CrushCard from "@/components/CrushCard";
import SorrySection from "@/components/SorrySection";
import Footer from "@/components/Footer";

const Index = () => {
  // Replace this with her actual photo URL once uploaded
  const crushPhotoUrl = undefined;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated snowfall */}
      <Snowfall />

      {/* Main content */}
      <main className="relative z-10">
        <ChristmasHero />
        <CrushCard photoUrl={crushPhotoUrl} />
        <SorrySection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
