import { Leaf, TrendingUp, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-concrete.jpg";

export const Hero = () => {

  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Экологичные строительные материалы" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Механоактивированное цементное вяжущее нового поколения
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance">
            Высокоэкологичные строительные материалы с улучшенными характеристиками прочности и долговечности
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg shadow-soft">
              <div className="p-3 bg-primary/10 rounded-full">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Эко-рейтинг</h3>
              <p className="text-sm text-muted-foreground">Снижение CO₂ до 40%</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg shadow-soft">
              <div className="p-3 bg-primary/10 rounded-full">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Прочность</h3>
              <p className="text-sm text-muted-foreground">Прирост до 30%</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg shadow-soft">
              <div className="p-3 bg-primary/10 rounded-full">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Экономия</h3>
              <p className="text-sm text-muted-foreground">Материалов до 20%</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
