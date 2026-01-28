import { Link } from 'react-router-dom';
import {
  Users,
  Utensils,
  Wrench,
  Leaf,
  Clock,
  CheckCircle2,
  ArrowRight,
  Heart,
} from 'lucide-react';

const AprendizajeColaborativo = () => {
  const learningAreas = [
    {
      icon: <Wrench size={32} />,
      title: 'Oficios Tradicionales',
      description:
        'Carpintería, fontanería, electricidad doméstica. Aprende habilidades prácticas para la vida cotidiana.',
    },
    {
      icon: <Leaf size={32} />,
      title: 'Autosuficiencia',
      description:
        'Huerta, conservas, jabónes naturales, cosmética. Descubre los saberes de la autosuficiencia rural.',
    },
    {
      icon: <Utensils size={32} />,
      title: 'Gastronomía Colaborativa',
      description:
        'Cocina colectiva con productos locales, panadería tradicional y fermentación. Comparte y aprende.',
    },
    {
      icon: <Heart size={32} />,
      title: 'Convivencia',
      description:
        'Tareas compartidas, organización horizontal y aprendizaje mutuo. Una experiencia comunitaria auténtica.',
    },
  ];

  const whatIncludes = [
    'Alojamiento en habitación compartida',
    'Acceso a todas las zonas comunes',
    'Talleres y actividades de aprendizaje',
    'Ingredientes para cocina colaborativa',
    'Materiales para talleres',
    'WiFi y servicios básicos',
    'Uso de herramientas y espacios de trabajo',
    'Convivencia con personas afines',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source
              src="https://customer-assets.emergentagent.com/job_b779bf07-1103-4cc2-b2d2-68140f1ddfce/artifacts/kcm04s8c_20251228_113406.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 text-[#FDFFD2]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Aprendizaje Colaborativo
          </h1>
          <p className="text-xl md:text-2xl mb-4">
            Vive, aprende y crea en comunidad
          </p>
          <p className="text-lg md:text-xl">
            Una experiencia de convivencia y autosuficiencia en el Valle de Baztán
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="py-16 bg-[#F5F2ED]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-4xl font-bold mb-8 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Una forma diferente de vivir y aprender
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-lg text-[#5A5F4D] mb-4">
                  Graciosenea abre sus puertas a un <strong>modelo de convivencia colaborativa</strong> donde
                  aprender oficios tradicionales, autosuficiencia y saberes rurales se convierte en
                  una experiencia compartida.
                </p>
                <p className="text-lg text-[#5A5F4D]">
                  No es un curso, no es un retiro. Es <strong>vida en comunidad</strong> con personas que
                  comparten el deseo de aprender, crear y vivir de forma más consciente y autónoma.
                </p>
              </div>
              <div>
                <p className="text-lg text-[#5A5F4D] mb-4">
                  Aquí <strong>cocinas colaborativamente</strong>, participas en tareas del hogar,
                  aprendes carpintería básica, creas tus propios jabones, cuidas la huerta y descubres
                  oficios que te hacen más autónomo.
                </p>
                <p className="text-lg text-[#5A5F4D]">
                  Todo ello en una <strong>casa señorial del siglo XIX</strong>, rodeado de naturaleza y
                  junto a personas que comparten tus intereses.
                </p>
              </div>
            </div>

            {/* Pricing Box */}
            <div className="bg-[#9B2C2C] text-white rounded-lg p-8 text-center shadow-xl">
              <div className="inline-flex items-center gap-3 mb-4">
                <Users size={32} />
                <h3
                  className="text-3xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  40€ por persona/noche
                </h3>
              </div>
              <p className="text-xl mb-6 text-white/90">
                Alojamiento + Cocina colaborativa + Talleres + Convivencia
              </p>
              <p className="text-white/80">
                Todo incluido. Mínimo 3 noches para una experiencia completa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Áreas de Aprendizaje
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningAreas.map((area, index) => (
              <div
                key={index}
                className="bg-[#F5F2ED] rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-[#9B2C2C] mb-4">{area.icon}</div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {area.title}
                </h3>
                <p className="text-[#5A5F4D]">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-[#8B9A8E] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl font-bold mb-12 text-center text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Qué incluye
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whatIncludes.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                  <CheckCircle2 className="flex-shrink-0 mt-1" size={20} />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-[#F5F2ED]">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Cómo funciona
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#9B2C2C] text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Solicita tu estancia
                </h3>
                <p className="text-lg text-[#5A5F4D]">
                  Contacta directamente para conocer disponibilidad. Preferimos una llamada de 5
                  minutos para asegurar que el modelo se ajusta a tus expectativas.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#9B2C2C] text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Planificación quincenal
                </h3>
                <p className="text-lg text-[#5A5F4D]">
                  Cada dos semanas se planifican los talleres, tareas y actividades. Los participantes
                  proponen, eligen y organizan el aprendizaje de forma horizontal.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#9B2C2C] text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Convivencia y aprendizaje
                </h3>
                <p className="text-lg text-[#5A5F4D]">
                  Mañanas de talleres prácticos, tardes libres para explorar el valle, y cocina
                  colaborativa. Horarios flexibles adaptados al ritmo del grupo.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#9B2C2C] text-white rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Experimenta y crea
                </h3>
                <p className="text-lg text-[#5A5F4D]">
                  Desde fabricar un banco de trabajo hasta hacer tu propia pasta de dientes. El
                  aprendizaje es práctico, experimental y auténtico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Example */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Clock size={32} className="text-[#9B2C2C]" />
              <h2
                className="text-3xl font-bold text-center"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Ejemplo de jornada
              </h2>
            </div>
            <div className="bg-[#F5F2ED] rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="font-bold text-[#9B2C2C] min-w-[100px]">9:00 - 10:00</span>
                  <span className="text-[#5A5F4D]">Desayuno y organización del día</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-[#9B2C2C] min-w-[100px]">10:00 - 14:00</span>
                  <span className="text-[#5A5F4D]">
                    Taller práctico (carpintería, jabón, huerta, etc.)
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-[#9B2C2C] min-w-[100px]">14:00 - 15:30</span>
                  <span className="text-[#5A5F4D]">Cocina colaborativa y comida</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-[#9B2C2C] min-w-[100px]">15:30 - 20:00</span>
                  <span className="text-[#5A5F4D]">
                    Tiempo libre (explorar el valle, descanso, lectura)
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-[#9B2C2C] min-w-[100px]">20:00 - 22:00</span>
                  <span className="text-[#5A5F4D]">Cena colaborativa y velada</span>
                </div>
              </div>
              <p className="text-sm text-[#5A5F4D] mt-6 italic">
                * Horarios flexibles adaptados al grupo y las actividades del día
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-16 bg-[#F5F2ED]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl font-bold mb-8 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ¿Para quién es esta experiencia?
            </h2>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <p className="text-lg text-[#5A5F4D] mb-6">
                Esta experiencia es para personas que:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#5A5F4D]">
                    <strong>Buscan autosuficiencia:</strong> Quieren aprender habilidades prácticas
                    para ser más autónomos en su vida cotidiana
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#5A5F4D]">
                    <strong>Valoran la convivencia:</strong> Disfrutan compartiendo espacios,
                    conocimientos y tareas con otras personas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#5A5F4D]">
                    <strong>Tienen curiosidad por oficios:</strong> Les atrae aprender carpintería,
                    fontanería, jabón natural, huerta...
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#5A5F4D]">
                    <strong>Buscan conexión con lo rural:</strong> Quieren vivir una experiencia
                    auténtica en el campo, lejos del turismo convencional
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#5A5F4D]">
                    <strong>Están dispuestas a participar:</strong> No es un hotel, es una casa
                    viva donde todos aportamos
                  </span>
                </li>
              </ul>
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
            ¿Listo para vivir esta experiencia?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Hablemos. Una llamada de 5 minutos para conocernos y ver si encajamos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#9B2C2C] rounded hover:bg-gray-100 transition-all hover:scale-105"
            >
              Solicita información
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:623151160"
              className="inline-block px-8 py-4 border-2 border-white text-white rounded hover:bg-white hover:text-[#9B2C2C] transition-all"
            >
              Llámanos: 623 15 11 60
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AprendizajeColaborativo;