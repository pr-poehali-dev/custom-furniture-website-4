import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const steps = [
  { num: '01', title: 'Заявка', desc: 'Оставьте заявку на сайте или позвоните — мы перезвоним в течение 15 минут', icon: 'Phone' },
  { num: '02', title: 'Замер', desc: 'Выедем к вам бесплатно, снимем размеры и предложим варианты дизайна', icon: 'Ruler' },
  { num: '03', title: 'Проект', desc: '3D-проект с визуализацией и точным расчётом стоимости за 1–2 дня', icon: 'Monitor' },
  { num: '04', title: 'Производство', desc: 'Изготавливаем на собственном оборудовании строго по вашему проекту', icon: 'Settings' },
  { num: '05', title: 'Доставка', desc: 'Привезём и соберём в оговорённый срок по всему Крыму', icon: 'Truck' },
  { num: '06', title: 'Гарантия', desc: '3 года гарантии. При необходимости бесплатно устраним любой дефект', icon: 'Shield' },
];

const services = [
  { title: 'Кухни на заказ', desc: 'Проектируем кухни любой сложности — от эконома до премиум класса. ЛДСП, МДФ, массив.', price: 'от 65 000 ₽', icon: 'ChefHat' },
  { title: 'Шкафы и гардеробные', desc: 'Встроенные шкафы-купе, распашные, гардеробные системы под любое пространство.', price: 'от 35 000 ₽', icon: 'Package' },
  { title: 'Спальная мебель', desc: 'Кровати с подъёмным механизмом, тумбочки, комоды — создаём спальни мечты.', price: 'от 40 000 ₽', icon: 'Bed' },
  { title: 'Мягкая мебель', desc: 'Диваны, кресла на заказ — любые формы, размеры и обивочные материалы.', price: 'от 55 000 ₽', icon: 'Armchair' },
  { title: 'Детская мебель', desc: 'Безопасная мебель для детей: кровати, столы, шкафы из экологичных материалов.', price: 'от 30 000 ₽', icon: 'Star' },
  { title: 'Офисная мебель', desc: 'Столы, стеллажи, шкафы для бизнеса — рабочие пространства под ключ.', price: 'от 25 000 ₽', icon: 'Briefcase' },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.05 }
    );
    const els = ref.current?.querySelectorAll('.section-reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="overflow-hidden">
      <div className="py-24 bg-cream-DEFAULT">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-reveal text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold-DEFAULT" />
              <span className="font-golos text-gold-DEFAULT text-sm tracking-[0.25em] uppercase">Что мы делаем</span>
              <div className="h-px w-12 bg-gold-DEFAULT" />
            </div>
            <h2 className="font-oswald font-bold text-charcoal-DEFAULT leading-none" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
              НАШИ УСЛУГИ
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {services.map((srv, i) => (
              <div key={srv.title} className="section-reveal card-hover bg-white p-8 group cursor-pointer" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="w-14 h-14 bg-charcoal-DEFAULT group-hover:bg-gold-DEFAULT flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon name={srv.icon} size={24} className="text-gold-DEFAULT group-hover:text-charcoal-DEFAULT transition-colors duration-300" />
                </div>
                <h3 className="font-oswald font-bold text-charcoal-DEFAULT text-2xl mb-3">{srv.title}</h3>
                <p className="font-golos text-charcoal-medium text-sm leading-relaxed mb-5">{srv.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-cream-dark">
                  <span className="font-oswald font-bold text-charcoal-DEFAULT text-lg">{srv.price}</span>
                  <Icon name="ArrowRight" size={18} className="text-gold-DEFAULT group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 bg-charcoal-DEFAULT">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-reveal text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold-DEFAULT" />
              <span className="font-golos text-gold-DEFAULT text-sm tracking-[0.25em] uppercase">Как мы работаем</span>
              <div className="h-px w-12 bg-gold-DEFAULT" />
            </div>
            <h2 className="font-oswald font-bold text-4xl text-slate-700">ЭТАПЫ РАБОТЫ</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="section-reveal group" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="border border-white/40 p-8 h-full hover:border-gold-DEFAULT transition-colors duration-300 bg-slate-700">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="font-oswald font-bold text-gold-DEFAULT text-4xl leading-none">{step.num}</div>
                    <div className="w-10 h-10 border border-gold-DEFAULT flex items-center justify-center mt-1">
                      <Icon name={step.icon} size={18} className="text-gold-DEFAULT" />
                    </div>
                  </div>
                  <h3 className="font-oswald font-bold text-white text-2xl mb-3">{step.title}</h3>
                  <p className="font-golos text-white text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}