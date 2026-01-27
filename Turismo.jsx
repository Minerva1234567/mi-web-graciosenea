import { Link } from 'react-router-dom';
import { Home as HomeIcon, Users, CheckCircle2 } from 'lucide-react';

const Turismo = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://customer-assets.emergentagent.com/job_b779bf07-1103-4cc2-b2d2-68140f1ddfce/artifacts/uv5ahswv_siBaztan.jpeg"
            alt="Valle de Baztán"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Turismo Rural
          </h1>
          <p className="text-xl md:text-2xl">Descanso tradicional en el Valle de Baztán</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-[#F5F2ED]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-4xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Alojamiento Tradicional
            </h2>
            <p className="text-lg text-[#5A5F4D]">
              Disfruta de un descanso auténtico en nuestra casa señorial del siglo XIX.
              Desayuno incluido en todas las modalidades de alojamiento.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Casa Completa */}
            <div className="bg-[#F5F2ED] rounded-lg overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="w-16 h-16 bg-[#9B2C2C]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <HomeIcon className="text-[#9B2C2C]" size={32} />
                </div>
                <h3
                  className="text-2xl font-bold mb-2 text-center"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Alquiler de Casa Completa
                </h3>
                <div className="text-center mb-6">
                  <p className="text-5xl font-bold text-[#9B2C2C]">300€</p>
                  <p className="text-[#5A5F4D]">/noche</p>
                </div>
                <p className="text-center text-[#5A5F4D] mb-2">Hasta 11 personas</p>
                <p className="text-center text-[#5A5F4D] mb-8">
                  Uso exclusivo de la casa, con libertad para disfrutar de sus salones históricos
                  y cocina. Desayuno incluido.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#5A5F4D]">Uso exclusivo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#5A5F4D]">Salones históricos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#5A5F4D]">Cocina equipada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#5A5F4D]">Desayuno incluido</span>
                  </li>
                </ul>
                <Link
                  to="/contacto"
                  className="block w-full text-center px-6 py-4 bg-[#9B2C2C] text-white rounded hover:bg-[#7d2323] transition-all"
                >
                  Reservar ahora
                </Link>
              </div>
            </div>

            {/* Por Habitaciones */}
            <div className="bg-[#F5F2ED] rounded-lg overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="w-16 h-16 bg-[#9B2C2C]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="text-[#9B2C2C]" size={32} />
                </div>
                <h3
                  className="text-2xl font-bold mb-2 text-center"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Alojamiento por Habitaciones
                </h3>
                <div className="text-center mb-6">
                  <p className="text-5xl font-bold text-[#9B2C2C]">80€</p>
                  <p className="text-[#5A5F4D]">/noche</p>
                </div>
                <p className="text-center text-[#5A5F4D] mb-2">
                  2 habitaciones de matrimonio + 3 camas individuales
                </p>
                <p className="text-center text-[#5A5F4D] mb-8">
                  Habitaciones espaciosas que respetan la escala y materiales originales, con suelos
                  de madera encerada y mobiliario de época. Desayuno incluido.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#5A5F4D]">Habitaciones dobles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#5A5F4D]">Suelos de madera encerados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#5A5F4D]">Mobiliario de época</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#5A5F4D]">Desayuno incluido</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#5A5F4D]">Camas supletorias +20€</span>
                  </li>
                </ul>
                <Link
                  to="/contacto"
                  className="block w-full text-center px-6 py-4 bg-[#9B2C2C] text-white rounded hover:bg-[#7d2323] transition-all"
                >
                  Reservar ahora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-[#F5F2ED]">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Características
          </h2>
          <p className="text-center text-lg text-[#5A5F4D] mb-12 max-w-3xl mx-auto">
            Todo lo que necesitas para una estancia perfecta
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Exteriores',
                items: [
                  'Terraza de 60m²',
                  'Jardín con huerto',
                  'Zona de aparcamiento',
                  'Vistas a la montaña',
                  'Junto al río',
                  'Cerca de Francia (30 km)',
                ],
              },
              {
                title: 'Zonas Comunes',
                items: [
                  'Salón con chimenea y piano',
                  'Decoración siglo XIX',
                  'Uso de cocina',
                  'Txoko',
                  '2 baños grandes',
                  'Cocina industrial',
                ],
              },
              {
                title: 'Habitaciones',
                items: ['Cama', 'Armario', 'Mesa y silla', 'Ropa de cama', 'Toallas'],
              },
              {
                title: 'Servicios',
                items: [
                  'Desayuno incluido',
                  'WiFi gratuito',
                  'Mascotas (consultar)',
                  'Leña gratis',
                  'Juegos de mesa',
                  'Palas y raquetas',
                ],
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {feature.title}
                </h3>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#9B2C2C] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-[#5A5F4D]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Opiniones
          </h2>
          <p className="text-center text-lg text-[#5A5F4D] mb-12">Lo que dicen nuestros huéspedes</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#F5F2ED] rounded-lg p-6">
              <p className="text-[#5A5F4D] mb-4 italic">
                "La casa está fenomenal y el entorno precioso. La atención de Minerva fue
                excepcional."
              </p>
              <p className="font-semibold">María Carmen</p>
            </div>
            <div className="bg-[#F5F2ED] rounded-lg p-6">
              <p className="text-[#5A5F4D] mb-4 italic">
                "La casa es espectacular, estilo rústico rehabilitado, un lujo alucinante."
              </p>
              <p className="font-semibold">Iosu Ortiz</p>
            </div>
            <div className="bg-[#F5F2ED] rounded-lg p-6">
              <p className="text-[#5A5F4D] mb-4 italic">
                "Unos días maravillosos. Entorno precioso. Casa limpia, grande y con todo lo
                necesario. Minerva es encantadora, amable, simpática y detallista."
              </p>
              <p className="font-semibold">Sandra</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#9B2C2C] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            ¿Listo para tu experiencia en Graciosenea?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Reserva sin comisiones. Atención directa y personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contacto"
              className="inline-block px-8 py-4 bg-white text-[#9B2C2C] rounded hover:bg-gray-100 transition-all"
            >
              Solicita tu estancia
            </Link>
            <a
              href="tel:623151160"
              className="inline-block px-8 py-4 border-2 border-white text-white rounded hover:bg-white hover:text-[#9B2C2C] transition-all"
            >
              Llámanos: 623 15 11 60 / 623 21 60 31
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Turismo;