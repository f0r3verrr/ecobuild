import fundLogo from "@/assets/fund-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-concrete-dark text-background py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">СТРОЙ УЧАСТОК</h3>
            <p className="text-sm text-background/80">
              Инновационные механоактивированные цементные материалы 
              для устойчивого строительства
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#about" className="hover:text-background transition-smooth">О технологии</a></li>
              <li><a href="#tests" className="hover:text-background transition-smooth">Испытания</a></li>
            </ul>
          </div>

        </div>
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-background/80">
              <p className="mb-2">ООО "СТРОЙ УЧАСТОК" | ИНН 1673007516</p>
              <p className="text-xs leading-relaxed max-w-2xl">
                Проект создан при поддержке Федерального государственного бюджетного учреждения 
                «Фонд содействия развитию малых форм предприятий в научно-технической сфере» 
                в рамках программы «Студенческий стартап» федерального проекта 
                «Платформа университетского технологического предпринимательства»
              </p>
            </div>

            <div className="flex-shrink-0">
              <img 
                src={fundLogo} 
                alt="Фонд содействия инновациям" 
                className="h-16 w-auto"
              />
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-background/60">
            <a href="#" className="hover:text-background transition-smooth">Политика конфиденциальности</a>
            {" • "}
            <span>© 2025 СТРОЙ УЧАСТОК. Все права защищены.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
