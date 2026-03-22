import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const values = [
  { icon: 'Ruler', title: 'Точность', desc: 'Каждый миллиметр имеет значение — мы производим по вашим размерам' },
  { icon: 'Leaf', title: 'Экологичность', desc: 'Используем сертифицированные материалы безопасные для здоровья' },
  { icon: 'Clock', title: 'Сроки', desc: 'Выполняем заказы в оговорённые сроки без переносов' },
  { icon: 'Shield', title: 'Гарантия', desc: 'Даём 3 года гарантии на всю производимую мебель' },
];

const team = [
  { name: 'Виталий Петров', role: 'Основатель & Директор', years: '12 лет в мебели' },
  { name: 'Мария Козлова', role: 'Главный дизайнер', years: '8 лет опыта' },
  { name: 'Дмитрий Сидоров', role: 'Руководитель производства', years: '10 лет опыта' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll('.section-reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="section-reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold-DEFAULT" />
              <span className="font-golos text-gold-DEFAULT text-sm tracking-[0.25em] uppercase">О компании</span>
            </div>
            <h2 className="font-oswald font-bold text-charcoal-DEFAULT leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
              МЫ СОЗДАЁМ<br />
              <span className="text-gold-DEFAULT">МЕБЕЛЬ МЕЧТЫ</span><br />
              С 2012 ГОДА
            </h2>
            <p className="font-golos text-charcoal-medium text-base leading-relaxed mb-6">
              «Формула мебели» — симферопольское производство с душой. Мы начинали как небольшая мастерская, 
              а сегодня выполняем заказы по всему Крыму. За эти годы мы создали более 3 000 проектов, 
              каждый из которых стал частью уютного дома нашего клиента.
            </p>
            <p className="font-golos text-charcoal-medium text-base leading-relaxed mb-8">
              Наша миссия — сделать качественную мебель на заказ доступной для каждой крымской семьи. 
              Мы не просто производим — мы проектируем, советуем и создаём вместе с вами.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-cream-DEFAULT px-4 py-3">
                <Icon name="MapPin" size={16} className="text-gold-DEFAULT" />
                <span className="font-golos text-sm text-charcoal-DEFAULT">Симферополь</span>
              </div>
              <div className="flex items-center gap-2 bg-cream-DEFAULT px-4 py-3">
                <Icon name="Truck" size={16} className="text-gold-DEFAULT" />
                <span className="font-golos text-sm text-charcoal-DEFAULT">Доставка по Крыму</span>
              </div>
              <div className="flex items-center gap-2 bg-cream-DEFAULT px-4 py-3">
                <Icon name="Wrench" size={16} className="text-gold-DEFAULT" />
                <span className="font-golos text-sm text-charcoal-DEFAULT">Собственное производство</span>
              </div>
            </div>
          </div>

          <div className="section-reveal relative" style={{ transitionDelay: '0.2s' }}>
            <div className="relative">
              <div className="aspect-[4/5] bg-charcoal-DEFAULT overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/aa1f21fc-4662-4e82-ab67-ab4668e6f30a/files/418ba39c-a074-49bb-aeff-22ab2e362564.jpg"
                  alt="Производство мебели"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold-DEFAULT p-8">
                <div className="font-oswald font-bold text-charcoal-DEFAULT text-5xl leading-none">12</div>
                <div className="font-golos text-charcoal-DEFAULT text-sm mt-1">лет на рынке</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-charcoal-DEFAULT border border-gold-DEFAULT/30 p-5">
                <div className="font-oswald font-bold text-white text-3xl leading-none">3 000+</div>
                <div className="font-golos text-white/90 text-xs mt-1">проектов сдано</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((val, i) => (
            <div key={val.title} className="section-reveal card-hover border border-cream-dark p-6" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="w-12 h-12 bg-gold-DEFAULT/10 flex items-center justify-center mb-4">
                <Icon name={val.icon} size={22} className="text-gold-DEFAULT" />
              </div>
              <h3 className="font-oswald font-semibold text-charcoal-DEFAULT text-xl mb-2">{val.title}</h3>
              <p className="font-golos text-charcoal-medium text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

        <div className="section-reveal">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold-DEFAULT" />
              <span className="font-golos text-gold-DEFAULT text-sm tracking-[0.25em] uppercase">Команда</span>
              <div className="h-px w-12 bg-gold-DEFAULT" />
            </div>
            <h2 className="font-oswald font-bold text-charcoal-DEFAULT text-4xl">НАШИ СПЕЦИАЛИСТЫ</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div key={member.name} className="section-reveal card-hover bg-cream-DEFAULT p-8 text-center" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="w-16 h-16 bg-charcoal-DEFAULT rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" size={28} className="text-gold-DEFAULT" />
                </div>
                <h3 className="font-oswald font-semibold text-charcoal-DEFAULT text-xl mb-1">{member.name}</h3>
                <div className="font-golos text-gold-DEFAULT text-sm mb-2">{member.role}</div>
                <div className="font-golos text-charcoal-medium text-xs">{member.years}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}