export const Tests = () => {
  const testResults = [
    {
      parameter: "Прочность при сжатии, МПа",
      standard: "35-40",
      ma: "45-52",
      improvement: "+30%",
    },
    {
      parameter: "Морозостойкость, циклы",
      standard: "150-200",
      ma: "200-300",
      improvement: "+35%",
    },
    {
      parameter: "Водопоглощение, %",
      standard: "4.5-5.0",
      ma: "3.2-3.8",
      improvement: "-25%",
    },
    {
      parameter: "Время схватывания, ч",
      standard: "4-5",
      ma: "3.5-4.2",
      improvement: "-15%",
    },
    {
      parameter: "Расход цемента, кг/м³",
      standard: "320-350",
      ma: "260-290",
      improvement: "-20%",
    },
    {
      parameter: "Выброс CO₂, кг/тонна",
      standard: "850-900",
      ma: "520-580",
      improvement: "-40%",
    },
  ];

  return (
    <section id="tests" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Результаты испытаний
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Независимые лабораторные испытания подтверждают превосходство наших материалов
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Сравнительные характеристики</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-lg shadow-soft">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-semibold">Параметр</th>
                  <th className="text-left p-4 font-semibold">Стандартный бетон</th>
                  <th className="text-left p-4 font-semibold">МА-Бетон</th>
                  <th className="text-left p-4 font-semibold">Улучшение</th>
                </tr>
              </thead>
              <tbody>
                {testResults.map((result, index) => (
                  <tr key={index} className="border-b last:border-b-0 hover:bg-muted/30 transition-smooth">
                    <td className="p-4 font-medium">{result.parameter}</td>
                    <td className="p-4 text-muted-foreground">{result.standard}</td>
                    <td className="p-4 font-semibold">{result.ma}</td>
                    <td className="p-4 text-primary font-semibold">{result.improvement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            *Испытания проведены в аккредитованной лаборатории согласно ГОСТ 10180-2012 и ГОСТ 10060-2012
          </p>
        </div>
      </div>
    </section>
  );
};
