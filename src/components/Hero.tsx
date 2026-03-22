import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

const slides = [
  {
    img: 'https://cdn.poehali.dev/projects/aa1f21fc-4662-4e82-ab67-ab4668e6f30a/files/418ba39c-a074-49bb-aeff-22ab2e362564.jpg',
    label: 'Кухни на заказ',
    sub: 'Индивидуальные проекты',
  },
  {
    img: 'https://cdn.poehali.dev/projects/aa1f21fc-4662-4e82-ab67-ab4668e6f30a/files/418ba39c-a074-49bb-aeff-22ab2e362564.jpg',
    label: 'Шкафы-купе',
    sub: 'Любые размеры и материалы',
  },
  {
    img: 'https://cdn.poehali.dev/projects/aa1f21fc-4662-4e82-ab67-ab4668e6f30a/files/418ba39c-a074-49bb-aeff-22ab2e362564.jpg',
    label: 'Спальные комнаты',
    sub: 'Создаём интерьер мечты',
  },
];

const stats = [
  { value: '12+', label: 'лет опыта' },
  { value: '3 000+', label: 'выполненных заказов' },
  { value: 'Весь Крым', label: 'регион доставки' },
  { value: '0 руб.', label: 'замер и выезд' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const handleCatalog = () => {
    document.querySelector('#catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContacts = () => {
    document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden bg-charcoal-DEFAULT">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.img} alt={slide.label} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-DEFAULT/90 via-charcoal-DEFAULT/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-DEFAULT/80 via-transparent to-transparent" />
        </div>
      ))}

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 w-full pt-24">
        <div className={`max-w-2xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold-DEFAULT" />
            <span className="font-golos text-gold-DEFAULT text-sm tracking-[0.25em] uppercase">
              {slides[current].sub}
            </span>
          </div>

          <h1 className="font-oswald font-bold text-white leading-none mb-4" style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}>
            МЕБЕЛЬ<br />
            <span className="text-gold-DEFAULT">НА ЗАКАЗ</span><br />
            <span className="text-white/60 font-light">В КРЫМУ</span>
          </h1>

          <p className="font-golos text-white/70 text-lg mb-10 max-w-lg leading-relaxed">
            Производим мебель с 2012 года. Кухни, шкафы, диваны, кровати — 
            создаём под ваши размеры и вкус. Работаем по всему Крыму.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleCatalog}
              className="group flex items-center gap-3 bg-gold-DEFAULT hover:bg-gold-light text-charcoal-DEFAULT font-oswald font-semibold text-base px-8 py-4 tracking-wider transition-all duration-300"
            >
              СМОТРЕТЬ КАТАЛОГ
              <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleContacts}
              className="flex items-center gap-3 border border-white/30 hover:border-gold-DEFAULT text-white hover:text-gold-DEFAULT font-oswald font-semibold text-base px-8 py-4 tracking-wider transition-all duration-300"
            >
              БЕСПЛАТНЫЙ ЗАМЕР
            </button>
          </div>
        </div>

        <div className={`absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-100 translate-x-20'}`}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 mr-12">
            <div className="font-oswald text-white/50 text-xs tracking-[0.2em] uppercase mb-4">Категории</div>
            {['Кухни', 'Шкафы', 'Кровати', 'Диваны', 'Прихожие'].map((cat, i) => (
              <div key={cat} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0 cursor-pointer group">
                <span className="font-oswald text-xs text-gold-DEFAULT">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-golos text-white/60 group-hover:text-white transition-colors text-sm">{cat}</span>
                <Icon name="ArrowRight" size={12} className="ml-auto text-white/20 group-hover:text-gold-DEFAULT transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-charcoal-DEFAULT/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="py-6 px-8 text-center">
              <div className="font-oswald font-bold text-gold-DEFAULT text-3xl mb-1">{stat.value}</div>
              <div className="font-golos text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2 xl:hidden">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1 transition-all duration-300 ${i === current ? 'h-8 bg-gold-DEFAULT' : 'h-3 bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
}
