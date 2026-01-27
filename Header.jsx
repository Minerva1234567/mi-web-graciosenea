import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/la-casa', label: 'La Casa' },
    { path: '/turismo', label: 'Turismo Rural' },
    { path: '/aprendizaje-colaborativo', label: 'Aprendizaje Colaborativo' },
    { path: '/profesionales', label: 'Profesionales' },
    { path: '/contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span
              className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-[#2D3319]' : 'text-white'
              }`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Graciosenea
            </span>
            <span
              className={`text-xs tracking-wider ${
                isScrolled ? 'text-[#5A5F4D]' : 'text-white/90'
              }`}
            >
              Valle de Baztán-Bidasoa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative group ${
                  isScrolled ? 'text-[#2D3319]' : 'text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#9B2C2C] transition-all group-hover:w-full ${
                    location.pathname === link.path ? 'w-full' : ''
                  }`}
                />
              </Link>
            ))}
            <a
              href="tel:623151160"
              className="flex items-center gap-2 px-4 py-2 bg-[#9B2C2C] text-white rounded hover:bg-[#7d2323] transition-all"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">Llamar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${
              isScrolled ? 'text-[#2D3319]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-[#2D3319] hover:bg-[#E8EBE9] rounded transition-colors ${
                    location.pathname === link.path ? 'bg-[#E8EBE9]' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:623151160"
                className="flex items-center justify-center gap-2 mx-4 px-4 py-3 bg-[#9B2C2C] text-white rounded hover:bg-[#7d2323] transition-all"
              >
                <Phone size={18} />
                <span>Llamar ahora</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;