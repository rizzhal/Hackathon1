import HeroContent from "./HeroContent";
import DashboardPreview from "./DashboardPreview";
import BackgroundEffects from "./BackgroundEffects";

const HeroSection = () => {
  return (
    <section 
    className="relative min-h-screen overflow-hidden bg-black">

      <BackgroundEffects />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center justify-between px-6">

        <HeroContent />

        <DashboardPreview />

      </div>

    </section>
  );
};

export default HeroSection;