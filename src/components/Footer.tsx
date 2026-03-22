import Icon from '@/components/ui/icon';

const navLinks = [
  { label: 'Главная', href: '#hero' },
  { label: 'О компании', href: '#about' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'Конфигуратор', href: '#configurator' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Услуги', href: '#services' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-DEFAULT border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-gold-DEFAULT flex items-center justify-center">
                <span className="font-oswald font-bold text-charcoal-DEFAULT text-sm">Ф</span>
              </div>
              <div>
                <div className="font-oswald font-bold text-white text-lg leading-none tracking-wider">ФОРМУЛА</div>
                <div className="font-golos text-[10px] text-gold-DEFAULT tracking-[0.3em] uppercase">Мебели</div>
              </div>
            </div>
            <p className="font-golos text-white/40 text-sm leading-relaxed">
              Производство мебели на заказ в Симферополе с 2012 года. 
              Работаем по всему Крыму.
            </p>
          </div>

          <div>
            <div className="font-oswald text-white/30 text-xs tracking-[0.2em] uppercase mb-5">Навигация</div>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left font-golos text-white/50 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="font-oswald text-white/30 text-xs tracking-[0.2em] uppercase mb-5">Контакты</div>
            <div className="space-y-3">
              <a href="tel:+79783469108" className="flex items-center gap-3 font-golos text-white/60 hover:text-white text-sm transition-colors">
                <Icon name="Phone" size={14} className="text-gold-DEFAULT" />
                +7 978 346-91-08
              </a>
              <a href="mailto:market-wb8@yandex.ru" className="flex items-center gap-3 font-golos text-white/60 hover:text-white text-sm transition-colors">
                <Icon name="Mail" size={14} className="text-gold-DEFAULT" />
                market-wb8@yandex.ru
              </a>
              <div className="flex items-center gap-3 font-golos text-white/60 text-sm">
                <Icon name="MapPin" size={14} className="text-gold-DEFAULT" />
                Симферополь, Крым
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-golos text-white/30 text-xs text-center md:text-left">
            © 2024 Формула Мебели. Все права защищены.
          </div>
          <div className="font-golos text-white/20 text-xs">
            Мебель на заказ в Крыму · Симферополь
          </div>
        </div>
      </div>
    </footer>
  );
}
