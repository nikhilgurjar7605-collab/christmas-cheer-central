import { useState } from "react";
import WelcomeScreen from "@/components/WelcomeScreen";
import CelebrationPage from "@/components/CelebrationPage";

const Index = () => {
  const [userName, setUserName] = useState<string>("");
  const [hasEntered, setHasEntered] = useState(false);

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setHasEntered(true);
  };

  const handleReset = () => {
    setUserName("");
    setHasEntered(false);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {!hasEntered ? (
        <WelcomeScreen onNameSubmit={handleNameSubmit} />
      ) : (
        <CelebrationPage userName={userName} onReset={handleReset} />
      )}
    </div>
  );
};

export default Index;