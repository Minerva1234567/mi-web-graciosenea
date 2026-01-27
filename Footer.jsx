import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2D3319] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3
              className="text-2xl font-bold mb-4 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Graciosenea
            </h3>
            <p className="text-gray-300 mb-4">
              Casa señorial del siglo XIX en el corazón del Valle de Baztán-Bidasoa.
              Un lugar para descansar, aprender y conectar con la naturaleza.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/la-casa"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  La Casa
                </Link>
              </li>
              <li>
                <Link
                  to="/turismo"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Turismo Rural
                </Link>
              </li>
              <li>
                <Link
                  to="/aprendizaje-colaborativo"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Aprendizaje Colaborativo
                </Link>
              </li>
              <li>
                <Link
                  to="/profesionales"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Profesionales
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="tel:623151160"
                    className="text-gray-300 hover:text-white transition-colors block"
                  >
                    623 15 11 60
                  </a>
                  <a
                    href="tel:623216031"
                    className="text-gray-300 hover:text-white transition-colors block"
                  >
                    623 21 60 31
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a
                  href="mailto:gracioseneabaztan@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  gracioseneabaztan@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Bentak auzoa, nº6<br />
                  31750, Donamaria (Navarra)
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Registry */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p className="mb-1">Nº Registro:</p>
              <p className="font-semibold text-gray-300">UCR01245</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Graciosenea. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;