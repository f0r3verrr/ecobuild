import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Advantages } from "@/components/Advantages";
import { EcoRating } from "@/components/EcoRating";
import { Tests } from "@/components/Tests";
import { Cases } from "@/components/Cases";
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
        <Cases />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
