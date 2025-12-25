import Confetti from "@/components/Confetti";
import NewYearHero from "@/components/NewYearHero";
import WishesSection from "@/components/WishesSection";
import SorrySection from "@/components/SorrySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated confetti */}
      <Confetti />

      {/* Main content */}
      <main className="relative z-10">
        <NewYearHero />
        <WishesSection />
        <SorrySection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;