import { Link } from 'react-router-dom';
import { ArrowRight, Home as HomeIcon, Users, Briefcase, MapPin } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://customer-assets.emergentagent.com/job_b779bf07-1103-4cc2-b2d2-68140f1ddfce/artifacts/k00zd2qa_20251228_113751.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <p className="text-lg md:text-xl mb-4 tracking-wider">Valle de Baztán-Bidasoa</p>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ongi etorri<br />Graciosenea
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            Versatilidad y patrimonio del siglo XX
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            Un lugar para descansar, crear o aprender. Talleres de oficios, saberes populares y música.
            Una casa que vive.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#9B2C2C] text-white text-lg font-medium rounded hover:bg-[#7d2323] transition-all hover:scale-105"
          >
            Solicita tu estancia
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Three Options Section */}
      <section className="py-20 bg-[#F5F2ED]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Descubre Graciosenea
            </h2>
            <p className="text-xl text-[#5A5F4D] max-w-3xl mx-auto">
              Un lugar único para descansar, aprender y conectar con la historia del valle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Turismo */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://customer-assets.emergentagent.com/job_graciosenea-stay/artifacts/li6vjx3a_IMG_0283.jpeg"
                  alt="Turismo y Descanso"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-[#9B2C2C]/10 rounded-full flex items-center justify-center mb-4">
                  <HomeIcon className="text-[#9B2C2C]" size={24} />
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Turismo y Descanso
                </h3>
                <p className="text-[#5A5F4D] mb-6">
                  Alquiler por habitaciones (80€/noche) o casa completa (300€/noche).
                  Desayuno incluido.
                </p>
                <Link
                  to="/turismo"
                  className="inline-flex items-center gap-2 text-[#9B2C2C] font-medium hover:gap-4 transition-all"
                >
                  Descubre más
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Aprendizaje Colaborativo */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://customer-assets.emergentagent.com/job_graciosenea-stay/artifacts/oe0852tl_IMG_0197.jpeg"
                  alt="Aprendizaje Colaborativo"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-[#9B2C2C]/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-[#9B2C2C]" size={24} />
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Aprendizaje Colaborativo
                </h3>
                <p className="text-[#5A5F4D] mb-6">
                  Convivencia, talleres de autosuficiencia y cocina colaborativa.
                  Todo incluido por 40€/persona/noche.
                </p>
                <Link
                  to="/aprendizaje-colaborativo"
                  className="inline-flex items-center gap-2 text-[#9B2C2C] font-medium hover:gap-4 transition-all"
                >
                  Descubre más
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Profesionales */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://customer-assets.emergentagent.com/job_graciosenea-stay/artifacts/kqy8un7d_IMG_0243.jpeg"
                  alt="Espacio para Profesionales"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-[#9B2C2C]/10 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="text-[#9B2C2C]" size={24} />
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Espacio para Profesionales
                </h3>
                <p className="text-[#5A5F4D] mb-6">
                  Alquila la casa completa para retiros, formaciones y cursos.
                  Gestión completa de logística.
                </p>
                <Link
                  to="/profesionales"
                  className="inline-flex items-center gap-2 text-[#9B2C2C] font-medium hover:gap-4 transition-all"
                >
                  Descubre más
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlight */}
      <section className="py-20 bg-[#8B9A8E] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={32} className="text-white" />
                <h2
                  className="text-4xl font-bold text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Valle de Baztán-Bidasoa
                </h2>
              </div>
              <p className="text-xl text-white/90 mb-6">
                En el corazón del Valle de Baztán, rodeado de naturaleza y tradición.
                A solo 30 minutos de Francia y la costa vasca.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-white/90">30 km de San Sebastián</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-white/90">12 km de Embalses de Leurtza</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-white/90">25 km de Cuevas de Zugarramurdi</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-white/90">Junto al río con posibilidad de baño</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://customer-assets.emergentagent.com/job_b779bf07-1103-4cc2-b2d2-68140f1ddfce/artifacts/up789q9p_Paisaia_baztan%20%281%29.jpg"
                alt="Valle de Baztán"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#9B2C2C] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#9B2C2C] text-lg font-medium rounded hover:bg-gray-100 transition-all hover:scale-105"
            >
              Solicita tu estancia
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:623151160"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white text-lg font-medium rounded hover:bg-white hover:text-[#9B2C2C] transition-all"
            >
              Llámanos: 623 15 11 60
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;