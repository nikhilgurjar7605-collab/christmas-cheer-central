import Snowfall from "@/components/Snowfall";
import ChristmasHero from "@/components/ChristmasHero";
import FriendsSection from "@/components/FriendsSection";
import SorrySection from "@/components/SorrySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated snowfall */}
      <Snowfall />

      {/* Main content */}
      <main className="relative z-10">
        <ChristmasHero />
        <FriendsSection />
        <SorrySection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
