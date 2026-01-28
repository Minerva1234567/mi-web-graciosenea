import { Link } from 'react-router-dom';
import { Users, Utensils, Calendar, CheckCircle2, Briefcase, Coffee, Mountain } from 'lucide-react';

const Profesionales = () => {
  const whatWeOffer = [
    {
      icon: <Users size={32} />,
      title: 'Capacidad',
      description: 'Hasta 11 personas alojadas. Sala común para 8-12 en formación intensiva.',
    },
    {
      icon: <Utensils size={32} />,
      title: 'Alimentación Km0',
      description:
        'Gestionamos desayunos, comidas y cenas con productos locales y de temporada.',
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Zonas de Trabajo',
      description:
        'Salones amplios, iluminación natural, zona de descanso y terraza de 60m².',
    },
    {
      icon: <Mountain size={32} />,
      title: 'Actividades',
      description:
        'Sugerimos y organizamos actividades complementarias en la naturaleza.',
    },
  ];

  const idealFor = [
    {
      title: 'Retiros de Yoga y Mindfulness',
      description: 'Entorno tranquilo, terraza amplia y salas con luz natural.',
    },
    {
      title: 'Formaciones Profesionales',
      description: 'Espacio para equipos, talleres de empresa y coaching.',
    },
    {
      title: 'Retiros Creativos',
      description: 'Escritura, pintura, música... Un ambiente inspirador.',
    },
    {
      title: 'Grupos de Estudio',
      description: 'Intensivos académicos, preparación de oposiciones.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://customer-assets.emergentagent.com/job_graciosenea-stay/artifacts/1o3lupis_IMG_0217.jpeg"
            alt="Espacio para Profesionales"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 text-[#FDFFD2]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Espacio para Profesionales
          </h1>
          <p className="text-xl md:text-2xl">
            Logística completa para retiros y formaciones
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-[#F5F2ED]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tú enseñas, nosotros cuidamos el resto
            </h2>
            <p className="text-lg text-[#5A5F4D] mb-6">
              Graciosenea es el espacio ideal para formadores, coaches y profesionales que buscan un
              entorno único para sus retiros y cursos. Nos encargamos de la comida Km0 y toda la
              logística, tú te enfocas en tus estudiantes.
            </p>
            <p className="text-lg text-[#5A5F4D]">
              Casa completa para tu grupo, zonas de trabajo amplias, entorno inspirador y apoyo en la
              gestión del tiempo libre con actividades complementarias.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Qué ofrecemos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatWeOffer.map((item, index) => (
              <div
                key={index}
                className="bg-[#F5F2ED] rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-[#9B2C2C] mb-4">{item.icon}</div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#5A5F4D]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-16 bg-[#F5F2ED]">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ideal para
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {idealFor.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#5A5F4D]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-[#8B9A8E] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Coffee size={48} className="mx-auto mb-6 text-white" />
            <blockquote className="text-2xl italic mb-6">
              "Graciosenea fue el lugar perfecto para nuestro retiro de equipo. El entorno inspira,
              la casa tiene todo lo necesario y Minerva se encargó de que no tuviéramos que
              preocuparnos por nada más que nuestro trabajo."
            </blockquote>
            <p className="text-lg">- Formadora de coaching</p>
          </div>
        </div>
      </section>

      {/* Pricing & Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl font-bold mb-12 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tarifas Personalizadas
            </h2>
            <div className="bg-[#F5F2ED] rounded-lg p-8">
              <p className="text-lg text-[#5A5F4D] mb-6 text-center">
                Cada retiro es único. Contáctanos para diseñar un paquete a medida que incluya:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#5A5F4D]">Alquiler exclusivo de la casa</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#5A5F4D]">
                    Gestión completa de comidas (desayuno, comida, cena)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#5A5F4D]">Actividades complementarias en el Valle</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#5A5F4D]">Apoyo logístico durante toda la estancia</span>
                </div>
              </div>
              <div className="text-center">
                <Link
                  to="/contacto"
                  className="inline-block px-8 py-4 bg-[#9B2C2C] text-white rounded hover:bg-[#7d2323] transition-all"
                >
                  Solicita tu presupuesto
                </Link>
              </div>
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
            Hablemos de tu proyecto
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Escríbenos y cuéntanos qué tipo de retiro o formación tienes en mente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contacto"
              className="inline-block px-8 py-4 bg-white text-[#9B2C2C] rounded hover:bg-gray-100 transition-all"
            >
              Contactar
            </Link>
            <a
              href="mailto:gracioseneabaztan@gmail.com"
              className="inline-block px-8 py-4 border-2 border-white text-white rounded hover:bg-white hover:text-[#9B2C2C] transition-all"
            >
              gracioseneabaztan@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profesionales;