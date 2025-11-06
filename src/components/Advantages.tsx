import { Leaf, Shield, Clock, TrendingUp, Droplets, Snowflake, DollarSign, Award } from "lucide-react";

export const Advantages = () => {
  const advantages = [
    {
      icon: Leaf,
      title: "Снижение углеродного следа",
      description: "Сокращение выбросов CO₂ до 40% за счёт оптимизации расхода цемента и повышения эффективности связующего",
    },
    {
      icon: TrendingUp,
      title: "Повышенная прочность",
      description: "Прирост прочности при сжатии до 30% по сравнению с традиционными составами при том же расходе материалов",
    },
    {
      icon: DollarSign,
      title: "Экономия материалов",
      description: "Снижение расхода цемента до 20% без потери качества, что значительно сокращает затраты на строительство",
    },
    {
      icon: Clock,
      title: "Ускоренное схватывание",
      description: "Сокращение времени набора прочности до 15%, что позволяет быстрее переходить к следующим этапам строительства",
    },
    {
      icon: Shield,
      title: "Улучшенная долговечность",
      description: "Повышенная стойкость к агрессивным средам и механическим воздействиям увеличивает срок службы конструкций",
    },
    {
      icon: Droplets,
      title: "Водонепроницаемость",
      description: "Снижение водопоглощения до 25%, что критично для фундаментов и подземных сооружений",
    },
    {
      icon: Snowflake,
      title: "Морозостойкость",
      description: "Увеличение циклов замораживания-оттаивания до 35%, идеально подходит для российского климата",
    },
    {
      icon: Award,
      title: "Высокий эко-рейтинг",
      description: "Соответствие международным экологическим стандартам и возможность получения зелёных сертификатов для зданий",
    },
  ];

  return (
    <section id="advantages" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Преимущества механоактивированных материалов
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Инновационная технология, которая меняет представление о строительных материалах
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg shadow-soft hover:shadow-medium transition-smooth"
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <advantage.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
              <p className="text-sm text-muted-foreground">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
