import { Leaf, Award, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const EcoRating = () => {
  const scrollToDocuments = () => {
    document.getElementById("documents")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Экологичность и эко-рейтинг
            </h2>
            <p className="text-xl text-muted-foreground">
              Наши материалы соответствуют самым строгим экологическим стандартам
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-card rounded-lg shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Эко-рейтинг: 4.8/5.0</h3>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Углеродный след</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className="text-primary">★</div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Использование ресурсов</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className="text-primary">★</div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Безопасность производства</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((star) => (
                      <div key={star} className="text-primary">★</div>
                    ))}
                    <div className="text-muted-foreground">☆</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Возможность переработки</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className="text-primary">★</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-card rounded-lg shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Сертификаты</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">ISO 14001:2015</p>
                    <p className="text-sm text-muted-foreground">Система экологического менеджмента</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">BREEAM Excellent</p>
                    <p className="text-sm text-muted-foreground">Международная система оценки устойчивости зданий</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">ГОСТ 31538-2021</p>
                    <p className="text-sm text-muted-foreground">Цементы с минеральными добавками</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
            <h4 className="font-semibold text-lg mb-3">Методика оценки эко-рейтинга</h4>
            <p className="text-muted-foreground mb-4">
              Наша методика оценки экологичности основана на комплексном анализе жизненного цикла 
              продукта (LCA - Life Cycle Assessment). Мы учитываем выбросы парниковых газов, 
              потребление энергии и воды, использование возобновляемых ресурсов, а также 
              возможность вторичной переработки материалов после окончания срока службы.
            </p>
            <Button variant="outline" onClick={scrollToDocuments}>
              Подробнее о методике
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
