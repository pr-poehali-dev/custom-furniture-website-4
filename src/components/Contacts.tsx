import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.05 }
    );
    const els = ref.current?.querySelectorAll('.section-reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', phone: '', message: '' });
  };

  const socials = [
    { icon: 'Send', label: 'Telegram', href: '#' },
    { icon: 'MessageCircle', label: 'WhatsApp', href: '#' },
    { icon: 'Instagram', label: 'Instagram', href: '#' },
    { icon: 'Facebook', label: 'VK', href: '#' },
  ];

  return (
    <section id="contacts" ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold-DEFAULT" />
            <span className="font-golos text-gold-DEFAULT text-sm tracking-[0.25em] uppercase">Связаться</span>
            <div className="h-px w-12 bg-gold-DEFAULT" />
          </div>
          <h2 className="font-oswald font-bold text-charcoal-DEFAULT leading-none" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
            КОНТАКТЫ
          </h2>
          <p className="font-golos text-charcoal-DEFAULT mt-4">Ответим в течение 15 минут в рабочее время</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="section-reveal space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: 'Phone', label: 'Телефон', value: '+7 978 346-91-08', href: 'tel:+79783469108' },
                { icon: 'Mail', label: 'Email', value: 'market-wb8@yandex.ru', href: 'mailto:market-wb8@yandex.ru' },
                { icon: 'MapPin', label: 'Адрес', value: 'Симферополь, Крым', href: '#' },
                { icon: 'Clock', label: 'Режим работы', value: 'Пн–Сб: 9:00–18:00', href: '#' },
              ].map(contact => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-start gap-4 p-5 border border-cream-dark hover:border-gold-DEFAULT group transition-colors duration-200"
                >
                  <div className="w-10 h-10 bg-gold-DEFAULT/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-DEFAULT transition-colors duration-300">
                    <Icon name={contact.icon} size={18} className="text-gold-DEFAULT group-hover:text-charcoal-DEFAULT transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="font-golos text-charcoal-DEFAULT text-xs mb-1 uppercase tracking-wide font-semibold">{contact.label}</div>
                    <div className="font-oswald font-semibold text-charcoal-DEFAULT">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-charcoal-DEFAULT p-6">
              <div className="font-oswald text-white/80 text-xs tracking-[0.2em] uppercase mb-4">Мы в соцсетях</div>
              <div className="flex flex-wrap gap-3">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-2 bg-white/5 hover:bg-gold-DEFAULT border border-white/30 hover:border-gold-DEFAULT px-4 py-2.5 group transition-all duration-300"
                  >
                    <Icon name={s.icon} size={16} className="text-gold-DEFAULT group-hover:text-charcoal-DEFAULT transition-colors" />
                    <span className="font-golos text-white group-hover:text-charcoal-DEFAULT text-sm transition-colors">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-cream-DEFAULT p-6 border-l-4 border-gold-DEFAULT">
              <div className="font-oswald font-bold text-charcoal-DEFAULT text-xl mb-2">Бесплатный выезд замерщика</div>
              <p className="font-golos text-charcoal-DEFAULT text-sm leading-relaxed">
                Приедем в любую точку Крыма. Замер и консультация — бесплатно. 
                3D-проект в подарок при заказе от 50 000 ₽.
              </p>
            </div>
          </div>

          <div className="section-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-charcoal-DEFAULT p-8 md:p-10">
              <div className="font-oswald font-bold text-white text-2xl mb-2">ОСТАВЬТЕ ЗАЯВКУ</div>
              <p className="font-golos text-white/90 text-sm mb-8">Перезвоним в течение 15 минут</p>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-gold-DEFAULT flex items-center justify-center mb-4">
                    <Icon name="Check" size={32} className="text-charcoal-DEFAULT" />
                  </div>
                  <div className="font-oswald font-bold text-white text-2xl mb-2">Заявка отправлена!</div>
                  <p className="font-golos text-white/90 text-sm">Мы перезвоним вам в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-golos text-white text-xs uppercase tracking-wide block mb-2">Ваше имя *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      placeholder="Как к вам обращаться?"
                      className="w-full bg-white/15 border border-white/50 focus:border-gold-DEFAULT text-white font-golos text-sm px-4 py-3 outline-none transition-colors placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <label className="font-golos text-white text-xs uppercase tracking-wide block mb-2">Телефон *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-white/15 border border-white/50 focus:border-gold-DEFAULT text-white font-golos text-sm px-4 py-3 outline-none transition-colors placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <label className="font-golos text-white text-xs uppercase tracking-wide block mb-2">Что хотите заказать?</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      placeholder="Кухня, шкаф, размеры — любые детали помогут нам подготовиться..."
                      className="w-full bg-white/15 border border-white/50 focus:border-gold-DEFAULT text-white font-golos text-sm px-4 py-3 outline-none transition-colors placeholder:text-white/60 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gold-DEFAULT hover:bg-gold-light text-charcoal-DEFAULT font-oswald font-bold text-sm tracking-widest py-4 transition-all duration-300"
                  >
                    ОТПРАВИТЬ ЗАЯВКУ
                  </button>
                  <p className="font-golos text-white/90 text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="section-reveal mt-12 overflow-hidden" style={{ transitionDelay: '0.3s' }}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=34.102407%2C44.948946&z=13&pt=34.102407,44.948946,pm2rdm"
            width="100%"
            height="350"
            frameBorder="0"
            title="Карта — Формула мебели, Симферополь"
            className="w-full block"
          />
        </div>
      </div>
    </section>
  );
}