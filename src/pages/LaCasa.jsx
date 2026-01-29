import { useState } from 'react';
import { CheckCircle2, Home as HomeIcon, Sparkles, Calendar, Wifi, Car, Mountain, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';

const LaCasa = () => {
  const [activeImage, setActiveImage] = useState(0);

  const galleryImages = [
    {
      url: 'https://customer-assets.emergentagent.com/job_b779bf07-1103-4cc2-b2d2-68140f1ddfce/artifacts/lswha5y7_20250708_171511.jpg',
      alt: 'Fachada Graciosenea',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_graciosenea-stay/artifacts/li6vjx3a_IMG_0283.jpeg',
      alt: 'Habitación',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_graciosenea-stay/artifacts/kqy8un7d_IMG_0243.jpeg',
      alt: 'Habitación con camas individuales',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_graciosenea-stay/artifacts/knl73srr_IMG_0247.jpeg',
      alt: 'Máquina de coser Singer',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_graciosenea-stay/artifacts/oe0852tl_IMG_0197.jpeg',
      alt: 'Salón comedor',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_graciosenea-stay/artifacts/1o3lupis_IMG_0217.jpeg',
      alt: 'Detalle mesa de ajedrez',
    },
  ];

  const features = [
    {
      icon: <Mountain size={32} />,
      title: 'Exteriores',
      items: [
        'Terraza de 60m²',
        'Jardín con huerto',
        'Zona de aparcamiento',
        'Vistas a la montaña',
        'Junto al río con posibilidad de baño',
        'Cerca de Francia y playa (30 km)',
      ],
    },
    {
      icon: <HomeIcon size={32} />,
      title: 'Zonas Comunes',
      items: [
        'Salón con chimenea y piano',
        'Decoración original siglo XIX',
        'Uso de cocina',
        'Txoko',
        '2 baños grandes',
        'Cocina industrial equipada',
      ],
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Habitaciones',
      items: ['Cama', 'Armario', 'Mesa y silla', 'Ropa de cama', 'Toallas'],
    },
    {
      icon: <Wifi size={32} />,
      title: 'Servicios',
      items: [
        'Desayuno incluido',
        'WiFi gratuito',
        'Mascotas aceptadas (consultar)',
        'Leña gratis',
        'Juegos de mesa',
        'Palas y raquetas',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://customer-assets.emergentagent.com/job_b779bf07-1103-4cc2-b2d2-68140f1ddfce/artifacts/lswha5y7_20250708_171511.jpg"
            alt="Graciosenea"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1
            className="text-5xl md:text-6xl font-bold mb-4 text-[#FDFFD2]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            La Casa
          </h1>
          <p className="text-xl md:text-2xl">Graciosenea: Una casa rural de principios del siglo XX</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-[#F5F2ED]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-4xl font-bold mb-6 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Versatilidad y Patrimonio
            </h2>
            <p className="text-lg text-[#5A5F4D] text-center mb-8">
              Casa unifamiliar imponente del siglo XX en Ventas de Donamaría. Restaurada, no renovada, conservando su alma original.
            </p>
            <p className="text-lg text-[#5A5F4D] text-center">
              Con suelos de madera encerada, techos altos y decoración de época, Graciosenea te
              transporta a otra era manteniendo el confort moderno.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Galería
          </h2>
          <div className="max-w-6xl mx-auto">
            {/* Main Image */}
            <div className="mb-6 rounded-lg overflow-hidden shadow-xl">
              <img
                src={galleryImages[activeImage].url}
                alt={galleryImages[activeImage].alt}
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all ${
                    activeImage === index ? 'ring-4 ring-[#9B2C2C]' : ''
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Options */}
      <section className="py-16 bg-[#F5F2ED]">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Modalidades de Alojamiento
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Casa Completa */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="mb-6">
                <p className="text-sm text-[#9B2C2C] font-semibold mb-2">Hasta 11 personas</p>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Alquiler de Casa Completa
                </h3>
                <p className="text-4xl font-bold text-[#9B2C2C]">300€/noche</p>
              </div>
              <p className="text-[#5A5F4D] mb-6">
                Uso exclusivo de la casa más grande de la zona, con libertad para disfrutar de sus
                salones señoriales y cocina histórica. Desayuno incluido.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                  <span>Uso exclusivo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                  <span>Salones señoriales</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                  <span>Cocina histórica</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                  <span>Desayuno incluido</span>
                </li>
              </ul>
              <Link
                to="/contacto"
                className="inline-block w-full text-center px-6 py-3 bg-[#9B2C2C] text-white rounded hover:bg-[#7d2323] transition-all"
              >
                Consultar disponibilidad
              </Link>
            </div>

            {/* Por Habitaciones */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="mb-6">
                <p className="text-sm text-[#9B2C2C] font-semibold mb-2">
                  2 habitaciones de matrimonio + 3 habitaciones dobles + opción 1 cama supletoria
                </p>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Alojamiento por Habitaciones
                </h3>
                <p className="text-4xl font-bold text-[#9B2C2C]">80€/noche</p>
              </div>
              <p className="text-[#5A5F4D] mb-6">
                Habitaciones espaciosas que respetan los materiales originales, con suelos
                de madera encerada y mobiliario de época. Desayuno incluido.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                  <span>Habitaciones dobles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                  <span>Suelos de madera encerados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                  <span>Mobiliario de época</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                  <span>Desayuno incluido</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                  <span>Camas supletorias +20€</span>
                </li>
              </ul>
              <Link
                to="/contacto"
                className="inline-block w-full text-center px-6 py-3 bg-[#9B2C2C] text-white rounded hover:bg-[#7d2323] transition-all"
              >
                Consultar disponibilidad
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Las gracias en una construcción única
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#F5F2ED] rounded-lg p-6">
                <div className="text-[#9B2C2C] mb-4">{feature.icon}</div>
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
                      <span className="text-[#5A5F4D]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
            Reserva sin comisiones
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Contacto directo, mejor precio garantizado, resolución instantánea de consultas.
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
              623 15 11 60
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaCasa;