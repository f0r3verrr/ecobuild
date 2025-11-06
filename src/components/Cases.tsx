export const Cases = () => {
  const cases = [
    {
      title: "Жилой комплекс «Зелёная Долина»",
      location: "Республика Татарстан",
      description: "Применение МА-цемента в монолитном строительстве многоэтажного жилого комплекса",
      results: [
        "Снижение расхода цемента на 18%",
        "Сокращение сроков строительства на 12%",
        "Получен сертификат BREEAM Very Good",
      ],
      image: "https://workspace.ru/upload/fileman/f34/15ezd2tqjosskbejwrn93ropws456wor/03.jpg",
    },
    {
      title: "Промышленный комплекс «Технопарк»",
      location: "Свердловская область",
      description: "Производственные и складские помещения с высокими требованиями к прочности",
      results: [
        "Прочность на 28% выше проектной",
        "Водонепроницаемость W12 вместо W8",
        "Экономия материалов 1.2 млн рублей",
      ],
      image: "https://avatars.mds.yandex.net/i?id=4d52a2b8b609847a6ac6097ab9fbefe2_l-4571818-images-thumbs&n=13",
    },
    {
      title: "Ремонт транспортной инфраструктуры",
      location: "Московская область",
      description: "Восстановление бетонного покрытия дорог с использованием ремонтных смесей",
      results: [
        "Срок службы увеличен в 1.5 раза",
        "Сокращение времени ремонта на 30%",
        "Морозостойкость F300",
      ],
      image: "https://stroi.mos.ru/uploads/cache/gallery_media_full/gallery_media/0001/27/787712c988ac85ea5ae1c622c6c155d98e87dd72.jpeg",
    },
  ];

  return (
    <section id="cases" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Примеры использования
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Наши материалы успешно применяются в различных типах строительства
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-smooth"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover hover:scale-105 transition-smooth"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{caseItem.title}</h3>
                <p className="text-sm text-primary mb-4">{caseItem.location}</p>
                <p className="text-muted-foreground mb-4">{caseItem.description}</p>
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Результаты:</h4>
                  <ul className="space-y-1">
                    {caseItem.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
