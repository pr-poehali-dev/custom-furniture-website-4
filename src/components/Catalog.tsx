import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const categories = ['Все', 'Кухни', 'Шкафы', 'Кровати', 'Диваны', 'Прихожие'];

const products = [
  { id: 1, cat: 'Кухни', name: 'Кухня "Классик"', material: 'МДФ крашеный', price: 'от 85 000 ₽', tag: 'Хит продаж' },
  { id: 2, cat: 'Кухни', name: 'Кухня "Лофт"', material: 'ЛДСП дуб', price: 'от 65 000 ₽', tag: null },
  { id: 3, cat: 'Шкафы', name: 'Шкаф-купе "Макс"', material: 'ЛДСП + зеркало', price: 'от 35 000 ₽', tag: 'Популярное' },
  { id: 4, cat: 'Шкафы', name: 'Гардеробная система', material: 'МДФ матовый', price: 'от 55 000 ₽', tag: null },
  { id: 5, cat: 'Кровати', name: 'Кровать "Модерн"', material: 'Экокожа + МДФ', price: 'от 42 000 ₽', tag: 'Новинка' },
  { id: 6, cat: 'Диваны', name: 'Диван угловой "Уют"', material: 'Велюр', price: 'от 78 000 ₽', tag: null },
  { id: 7, cat: 'Прихожие', name: 'Прихожая "Компакт"', material: 'ЛДСП белый', price: 'от 28 000 ₽', tag: null },
  { id: 8, cat: 'Кухни', name: 'Кухня "Премиум"', material: 'МДФ эмаль', price: 'от 120 000 ₽', tag: 'Премиум' },
];

const tagColors: Record<string, string> = {
  'Хит продаж': 'bg-gold-DEFAULT text-charcoal-DEFAULT',
  'Популярное': 'bg-charcoal-DEFAULT text-white',
  'Новинка': 'bg-emerald-600 text-white',
  'Премиум': 'bg-amber-800 text-white',
};

const bgColors = [
  'bg-stone-100', 'bg-zinc-800', 'bg-amber-50', 'bg-slate-800',
  'bg-stone-200', 'bg-zinc-100', 'bg-amber-900', 'bg-stone-300',
];

export default function Catalog() {
  const [active, setActive] = useState('Все');
  const ref = useRef<HTMLDivElement>(null);

  const filtered = active === 'Все' ? products : products.filter(p => p.cat === active);

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
    <section id="catalog" ref={ref} className="py-24 bg-cream-DEFAULT overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold-DEFAULT" />
            <span className="font-golos text-gold-DEFAULT text-sm tracking-[0.25em] uppercase">Продукция</span>
            <div className="h-px w-12 bg-gold-DEFAULT" />
          </div>
          <h2 className="font-oswald font-bold text-charcoal-DEFAULT leading-none" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
            КАТАЛОГ МЕБЕЛИ
          </h2>
          <p className="font-golos text-charcoal-medium mt-4 max-w-xl mx-auto">
            Более 200 готовых проектов в нашем портфолио — или создадим полностью под вас
          </p>
        </div>

        <div className="section-reveal flex flex-wrap gap-3 justify-center mb-12" style={{ transitionDelay: '0.1s' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-oswald font-medium text-sm px-6 py-2.5 tracking-wider transition-all duration-300 ${
                active === cat
                  ? 'bg-charcoal-DEFAULT text-white'
                  : 'bg-white border border-cream-dark text-charcoal-DEFAULT hover:border-gold-DEFAULT hover:text-gold-DEFAULT'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className="section-reveal card-hover bg-white group cursor-pointer overflow-hidden"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className={`${bgColors[product.id % bgColors.length]} aspect-square flex items-center justify-center relative overflow-hidden`}>
                <Icon name="Package" size={48} className="text-white/30" />
                {product.tag && (
                  <div className={`absolute top-3 left-3 ${tagColors[product.tag]} font-golos text-xs font-semibold px-3 py-1`}>
                    {product.tag}
                  </div>
                )}
                <div className="absolute inset-0 bg-charcoal-DEFAULT/0 group-hover:bg-charcoal-DEFAULT/40 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 bg-gold-DEFAULT text-charcoal-DEFAULT font-oswald font-semibold text-xs px-5 py-2.5 tracking-wider transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    УЗНАТЬ ЦЕНУ
                  </button>
                </div>
              </div>
              <div className="p-5">
                <div className="font-golos text-gold-DEFAULT text-xs mb-1">{product.cat}</div>
                <h3 className="font-oswald font-semibold text-charcoal-DEFAULT text-lg leading-tight mb-1">{product.name}</h3>
                <div className="font-golos text-charcoal-medium text-xs mb-3">{product.material}</div>
                <div className="flex items-center justify-between">
                  <span className="font-oswald font-bold text-charcoal-DEFAULT text-lg">{product.price}</span>
                  <Icon name="ArrowRight" size={16} className="text-gold-DEFAULT group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-reveal text-center mt-12" style={{ transitionDelay: '0.3s' }}>
          <button className="font-oswald font-semibold text-sm tracking-wider border-2 border-charcoal-DEFAULT text-charcoal-DEFAULT hover:bg-charcoal-DEFAULT hover:text-white px-10 py-4 transition-all duration-300">
            СМОТРЕТЬ ВСЕ ПОЗИЦИИ
          </button>
        </div>
      </div>
    </section>
  );
}
