import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";

const BackgroundEffects = () => {
  return (
    <>
      {/* Left Spotlight */}
      <Spotlight
        className="-top-40 -left-20 md:-left-32 md:-top-20"
        fill="rgb(59 130 246)"
      />

      {/* Right Spotlight */}
      <Spotlight
        className="top-20 left-[70%]"
        fill="rgb(139 92 246)"
      />

      {/* Grid Background */}
      <div className="absolute inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Radial Fade */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,black_80%)]" />

      {/* Animated Beams */}
      <BackgroundBeams />
    </>
  );
};

export default BackgroundEffects;