import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Advantages } from "@/components/Advantages";
import { EcoRating } from "@/components/EcoRating";
import { Tests } from "@/components/Tests";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Advantages />
        <EcoRating />
        <Tests />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
