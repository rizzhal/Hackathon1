import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import UploadSection from "@/components/UploadSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="bg-black text-white">

      <Navbar />

      <HeroSection />

      <FeatureSection />

      <UploadSection />

      <Footer />

    </main>
  );
};

export default Home;