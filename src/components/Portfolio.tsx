import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const heroImg = 'https://cdn.poehali.dev/projects/aa1f21fc-4662-4e82-ab67-ab4668e6f30a/files/418ba39c-a074-49bb-aeff-22ab2e362564.jpg';

const works = [
  { id: 1, title: 'Кухня в стиле Лофт', location: 'Симферополь', area: '14 м²', cat: 'Кухни', bg: 'bg-zinc-800' },
  { id: 2, title: 'Гардеробная система', location: 'Ялта', area: '8 м²', cat: 'Шкафы', bg: 'bg-stone-300' },
  { id: 3, title: 'Кухня "Классик"', location: 'Севастополь', area: '18 м²', cat: 'Кухни', bg: 'bg-amber-50' },
  { id: 4, title: 'Спальня под заказ', location: 'Феодосия', area: '16 м²', cat: 'Кровати', bg: 'bg-slate-700' },
  { id: 5, title: 'Прихожая "Компакт"', location: 'Симферополь', area: '4 м²', cat: 'Прихожие', bg: 'bg-stone-200' },
  { id: 6, title: 'Угловой диван', location: 'Алушта', area: 'Гостиная', cat: 'Диваны', bg: 'bg-zinc-700' },
];

const reviews = [
  { name: 'Анна К.', city: 'Симферополь', text: 'Заказывали кухню — всё сделали точно в срок. Качество отличное, уже 2 года эксплуатируем без нареканий.', rating: 5 },
  { name: 'Михаил Р.', city: 'Севастополь', text: 'Шкаф-купе в спальню. Мастера аккуратные, всё собрали быстро. Рекомендую!', rating: 5 },
  { name: 'Светлана В.', city: 'Ялта', text: 'Очень довольна результатом. Дизайнер помогла с выбором цвета, всё смотрится идеально.', rating: 5 },
];

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.05 }
    );
    const els = ref.current?.querySelectorAll('.section-reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setActive(p => (p + 1) % reviews.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="portfolio" ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold-DEFAULT" />
            <span className="font-golos text-gold-DEFAULT text-sm tracking-[0.25em] uppercase">Наши работы</span>
            <div className="h-px w-12 bg-gold-DEFAULT" />
          </div>
          <h2 className="font-oswald font-bold text-charcoal-DEFAULT leading-none" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
            ПОРТФОЛИО
          </h2>
          <p className="font-golos text-charcoal-medium mt-4">Реализованные проекты по всему Крыму</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          {works.map((work, i) => (
            <div
              key={work.id}
              className={`section-reveal card-hover group relative overflow-hidden cursor-pointer ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={`${work.bg} ${i === 0 ? 'aspect-[4/3] md:aspect-auto md:h-full' : 'aspect-square'} flex items-center justify-center relative`} style={{ minHeight: i === 0 ? '300px' : 'auto' }}>
                {i < 2 && (
                  <img src={heroImg} alt={work.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                )}
                <div className="absolute inset-0 bg-charcoal-DEFAULT/0 group-hover:bg-charcoal-DEFAULT/50 transition-all duration-300" />
                <Icon name="Image" size={32} className="text-white/20 relative z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal-DEFAULT/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="font-golos text-gold-DEFAULT text-xs mb-1">{work.cat} · {work.location}</div>
                  <div className="font-oswald font-semibold text-white">{work.title}</div>
                  <div className="font-golos text-white/90 text-xs mt-0.5">{work.area}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-reveal bg-charcoal-DEFAULT p-10 md:p-16" style={{ transitionDelay: '0.2s' }}>
          <div className="text-center mb-10">
            <div className="font-oswald font-bold text-white text-3xl mb-2">ОТЗЫВЫ КЛИЕНТОВ</div>
            <div className="flex items-center justify-center gap-1">
              {[1,2,3,4,5].map(s => <span key={s} className="text-gold-DEFAULT text-xl">★</span>)}
              <span className="font-golos text-white/90 text-sm ml-2">5.0 / 200+ отзывов</span>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            {reviews.map((review, i) => (
              <div key={i} className={`transition-all duration-500 ${i === active ? 'opacity-100' : 'opacity-0 absolute'}`} style={{ display: i === active ? 'block' : 'none' }}>
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <span key={s} className="text-gold-DEFAULT">★</span>
                  ))}
                </div>
                <p className="font-golos text-white/80 text-lg leading-relaxed mb-6 italic">
                  «{review.text}»
                </p>
                <div className="font-oswald font-semibold text-white">{review.name}</div>
                <div className="font-golos text-gold-DEFAULT text-sm">{review.city}</div>
              </div>
            ))}

            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? 'bg-gold-DEFAULT w-6' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}