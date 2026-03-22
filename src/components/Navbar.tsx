import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'Главная', href: '#hero' },
  { label: 'О компании', href: '#about' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Услуги', href: '#services' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-charcoal shadow-2xl py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav('#hero')}>
          <div className="w-8 h-8 bg-gold-DEFAULT rounded-sm flex items-center justify-center">
            <span className="font-oswald font-bold text-charcoal-DEFAULT text-sm">Ф</span>
          </div>
          <div>
            <div className="font-oswald font-bold text-white text-lg leading-none tracking-wider">ФОРМУЛА</div>
            <div className="font-golos text-[10px] text-gold-DEFAULT tracking-[0.3em] uppercase">Мебели</div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              className="nav-link font-golos text-sm text-white/80 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a
          href="tel:+79783469108"
          className="hidden lg:flex items-center gap-2 bg-gold-DEFAULT hover:bg-gold-light text-charcoal-DEFAULT font-oswald font-semibold text-sm px-5 py-2.5 tracking-wide transition-all duration-300"
        >
          <Icon name="Phone" size={14} />
          +7 978 346-91-08
        </a>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-charcoal-DEFAULT border-t border-white/10 py-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              className="block w-full text-left px-6 py-3 font-golos text-white/80 hover:text-white hover:bg-white/5 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a href="tel:+79783469108" className="flex items-center gap-2 mx-6 mt-3 bg-gold-DEFAULT text-charcoal-DEFAULT font-oswald font-semibold px-5 py-3 justify-center">
            <Icon name="Phone" size={14} />
            +7 978 346-91-08
          </a>
        </div>
      )}
    </header>
  );
}
