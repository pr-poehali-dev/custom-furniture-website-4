import { useState } from 'react';
import Icon from '@/components/ui/icon';

const furnitureTypes = [
  { id: 'kitchen', label: 'Кухня', icon: 'ChefHat' },
  { id: 'wardrobe', label: 'Шкаф', icon: 'Package' },
  { id: 'bed', label: 'Кровать', icon: 'Bed' },
  { id: 'sofa', label: 'Диван', icon: 'Armchair' },
];

const materials = [
  { id: 'ldsp-white', label: 'ЛДСП белый', color: '#F5F5F5', border: '#E0E0E0' },
  { id: 'ldsp-oak', label: 'ЛДСП дуб', color: '#C8A876', border: '#A08050' },
  { id: 'mdf-paint', label: 'МДФ крашеный', color: '#2D3748', border: '#1A202C' },
  { id: 'mdf-mat', label: 'МДФ матовый', color: '#718096', border: '#4A5568' },
  { id: 'eco-leather', label: 'Экокожа', color: '#744210', border: '#5A3205' },
  { id: 'velvet', label: 'Велюр', color: '#553C9A', border: '#44337A' },
];

const colors = [
  { id: 'white', label: 'Белый', hex: '#FFFFFF' },
  { id: 'beige', label: 'Бежевый', hex: '#F5DEB3' },
  { id: 'gray', label: 'Серый', hex: '#808080' },
  { id: 'dark', label: 'Антрацит', hex: '#2D2D2D' },
  { id: 'walnut', label: 'Орех', hex: '#7B4F2E' },
  { id: 'oak', label: 'Дуб', hex: '#C8A876' },
  { id: 'green', label: 'Зелёный', hex: '#4A7C59' },
  { id: 'blue', label: 'Синий', hex: '#2C5F8A' },
];

const estimatePrices: Record<string, number> = {
  kitchen: 75000,
  wardrobe: 35000,
  bed: 42000,
  sofa: 65000,
};

export default function Configurator() {
  const [type, setType] = useState('kitchen');
  const [material, setMaterial] = useState('ldsp-white');
  const [color, setColor] = useState('white');
  const [width, setWidth] = useState(180);
  const [height, setHeight] = useState(220);
  const [depth, setDepth] = useState(60);

  const basePrice = estimatePrices[type] || 50000;
  const matMultiplier = ['mdf-paint', 'mdf-mat', 'eco-leather', 'velvet'].includes(material) ? 1.4 : 1;
  const sizeMultiplier = (width * height * depth) / (180 * 220 * 60);
  const estimate = Math.round(basePrice * matMultiplier * sizeMultiplier / 1000) * 1000;

  const selectedColor = colors.find(c => c.id === color)?.hex || '#FFFFFF';
  const selectedMat = materials.find(m => m.id === material);

  return (
    <section id="configurator" className="py-24 overflow-hidden bg-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold-DEFAULT" />
            <span className="font-golos text-gold-DEFAULT text-sm tracking-[0.25em] uppercase">Онлайн-инструмент</span>
            <div className="h-px w-12 bg-gold-DEFAULT" />
          </div>
          <h2 className="font-oswald font-bold text-white leading-none" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
            КОНФИГУРАТОР МЕБЕЛИ
          </h2>
          <p className="font-golos text-white/90 mt-4">
            Подберите параметры и получите предварительный расчёт стоимости
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <div className="font-oswald text-white/80 text-xs tracking-[0.2em] uppercase mb-4">01. Тип мебели</div>
              <div className="grid grid-cols-2 gap-3">
                {furnitureTypes.map(ft => (
                  <button
                    key={ft.id}
                    onClick={() => setType(ft.id)}
                    className={`flex items-center gap-3 p-4 border transition-all duration-200 ${
                      type === ft.id
                        ? 'border-gold-DEFAULT bg-gold-DEFAULT/10 text-white'
                        : 'border-white/30 bg-white/5 text-white/80 hover:border-white/60'
                    }`}
                  >
                    <Icon name={ft.icon} size={20} className={type === ft.id ? 'text-gold-DEFAULT' : ''} />
                    <span className="font-oswald font-medium tracking-wide">{ft.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="font-oswald text-white/80 text-xs tracking-[0.2em] uppercase mb-4">02. Материал</div>
              <div className="grid grid-cols-3 gap-2">
                {materials.map(mat => (
                  <button
                    key={mat.id}
                    onClick={() => setMaterial(mat.id)}
                    className={`flex items-center gap-2 p-3 border transition-all duration-200 ${
                      material === mat.id
                        ? 'border-gold-DEFAULT bg-gold-DEFAULT/10'
                        : 'border-white/30 bg-white/5 hover:border-white/60'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full flex-shrink-0 border" style={{ backgroundColor: mat.color, borderColor: mat.border }} />
                    <span className={`font-golos text-xs ${material === mat.id ? 'text-white' : 'text-white/80'}`}>{mat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="font-oswald text-white/80 text-xs tracking-[0.2em] uppercase mb-4">03. Цвет</div>
              <div className="flex flex-wrap gap-3">
                {colors.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setColor(c.id)}
                    title={c.label}
                    className={`w-9 h-9 rounded-full transition-all duration-200 ${
                      color === c.id ? 'ring-2 ring-gold-DEFAULT ring-offset-2 ring-offset-charcoal-DEFAULT scale-110' : 'hover:scale-105'
                    }`}
                    style={{ backgroundColor: c.hex, border: c.hex === '#FFFFFF' ? '1px solid rgba(255,255,255,0.3)' : 'none' }}
                  />
                ))}
              </div>
              <div className="font-golos text-white/80 text-xs mt-2">
                Выбрано: {colors.find(c => c.id === color)?.label}
              </div>
            </div>

            <div>
              <div className="font-oswald text-white/80 text-xs tracking-[0.2em] uppercase mb-4">04. Размеры (см)</div>
              <div className="space-y-4">
                {[
                  { label: 'Ширина', value: width, set: setWidth, min: 60, max: 400 },
                  { label: 'Высота', value: height, set: setHeight, min: 60, max: 280 },
                  { label: 'Глубина', value: depth, set: setDepth, min: 30, max: 100 },
                ].map(dim => (
                  <div key={dim.label}>
                    <div className="flex justify-between mb-2">
                      <span className="font-golos text-white/90 text-sm">{dim.label}</span>
                      <span className="font-oswald text-gold-DEFAULT font-semibold">{dim.value} см</span>
                    </div>
                    <input
                      type="range"
                      min={dim.min}
                      max={dim.max}
                      value={dim.value}
                      onChange={e => dim.set(Number(e.target.value))}
                      className="w-full h-1 appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #C9A84C ${((dim.value - dim.min) / (dim.max - dim.min)) * 100}%, rgba(255,255,255,0.2) 0%)`
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex-1 bg-white/5 border border-white/20 flex items-center justify-center relative overflow-hidden min-h-[300px]">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(45deg, #C9A84C 25%, transparent 25%), linear-gradient(-45deg, #C9A84C 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #C9A84C 75%), linear-gradient(-45deg, transparent 75%, #C9A84C 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px' }} />

              <div className="relative flex flex-col items-center justify-center">
                {type === 'kitchen' && (
                  <div className="relative" style={{ width: `${Math.min(width * 0.8, 260)}px`, height: `${Math.min(height * 0.6, 200)}px` }}>
                    <div className="absolute bottom-0 left-0 right-0 h-2/3 rounded-sm" style={{ backgroundColor: selectedColor, border: `2px solid ${selectedMat?.border || '#888'}`, opacity: 0.9 }} />
                    <div className="absolute top-0 left-0 right-0 h-1/3 rounded-sm" style={{ backgroundColor: selectedColor, border: `2px solid ${selectedMat?.border || '#888'}`, opacity: 0.9 }} />
                    <div className="absolute top-[30%] left-0 right-0 h-1" style={{ backgroundColor: selectedMat?.border || '#888', opacity: 0.4 }} />
                    {[0.2, 0.5, 0.8].map((pos, i) => (
                      <div key={i} className="absolute w-2 h-2 rounded-full bg-gold-DEFAULT" style={{ top: '35%', left: `${pos * 100}%`, transform: 'translate(-50%, -50%)' }} />
                    ))}
                  </div>
                )}
                {type === 'wardrobe' && (
                  <div className="flex gap-1">
                    {[1, 2].map((door) => (
                      <div key={door} className="rounded-sm" style={{ width: `${Math.min(width * 0.4, 110)}px`, height: `${Math.min(height * 0.65, 220)}px`, backgroundColor: selectedColor, border: `2px solid ${selectedMat?.border || '#888'}`, opacity: 0.9 }}>
                        <div className="m-2 h-1/3 border" style={{ borderColor: `${selectedMat?.border}40` }} />
                        <div className="w-1.5 h-6 bg-gold-DEFAULT mx-auto mt-3 rounded-full" />
                      </div>
                    ))}
                  </div>
                )}
                {(type === 'bed' || type === 'sofa') && (
                  <div className="relative" style={{ width: `${Math.min(width * 0.8, 260)}px` }}>
                    <div className="rounded-sm mb-1" style={{ height: `${Math.min(height * 0.25, 60)}px`, backgroundColor: selectedColor, border: `2px solid ${selectedMat?.border || '#888'}`, opacity: 0.9 }} />
                    <div className="rounded-sm" style={{ height: `${Math.min(depth * 1.2, 80)}px`, backgroundColor: selectedColor, border: `2px solid ${selectedMat?.border || '#888'}`, opacity: 0.75 }} />
                  </div>
                )}
                <div className="mt-4 text-center">
                  <div className="font-golos text-white/80 text-xs">{width} × {height} × {depth} см</div>
                  <div className="font-golos text-white/70 text-xs mt-1">{materials.find(m => m.id === material)?.label} · {colors.find(c => c.id === color)?.label}</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-gold-DEFAULT/30 p-6">
              <div className="font-oswald text-white/80 text-xs tracking-[0.2em] uppercase mb-4">Предварительная стоимость</div>
              <div className="font-oswald font-bold text-gold-DEFAULT text-5xl mb-2">
                {estimate.toLocaleString('ru')} ₽
              </div>
              <p className="font-golos text-white/80 text-xs mb-6">
                * Ориентировочная цена. Точный расчёт — после выезда замерщика
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { label: 'Тип', val: furnitureTypes.find(f => f.id === type)?.label },
                  { label: 'Материал', val: materials.find(m => m.id === material)?.label },
                  { label: 'Размеры', val: `${width} × ${height} × ${depth} см` },
                ].map(row => (
                  <div key={row.label} className="flex justify-between border-b border-white/10 pb-2">
                    <span className="font-golos text-white/80 text-sm">{row.label}</span>
                    <span className="font-golos text-white text-sm">{row.val}</span>
                  </div>
                ))}
              </div>
              <button className="w-full bg-gold-DEFAULT hover:bg-gold-light text-charcoal-DEFAULT font-oswald font-bold text-sm tracking-wider py-4 transition-all duration-300">
                ПОЛУЧИТЬ ТОЧНЫЙ РАСЧЁТ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}