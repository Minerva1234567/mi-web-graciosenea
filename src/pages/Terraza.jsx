import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Wind, Mountain, ChevronLeft, ChevronRight } from 'lucide-react';

const Terraza = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    'https://customer-assets.emergentagent.com/job_b779bf07-1103-4cc2-b2d2-68140f1ddfce/artifacts/up789q9p_Paisaia_baztan%20%281%29.jpg',
    'https://customer-assets.emergentagent.com/job_b779bf07-1103-4cc2-b2d2-68140f1ddfce/artifacts/uv5ahswv_siBaztan.jpeg',
    'https://customer-assets.emergentagent.com/job_graciosenea-stay/artifacts/li6vjx3a_IMG_0283.jpeg',
    'https://customer-assets.emergentagent.com/job_graciosenea-stay/artifacts/kqy8un7d_IMG_0243.jpeg',
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://customer-assets.emergentagent.com/job_b779bf07-1103-4cc2-b2d2-68140f1ddfce/artifacts/up789q9p_Paisaia_baztan%20%281%29.jpg"
            alt="Terraza"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1
            className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
            style={{ fontFamily: "'Playfair Display', serif", textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}
          >
            Terraza
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-md" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.9)'}}>60m² de conexión con el valle</p>
        </div>
      </section>

      {/* Carrusel */}
      <section className="py-16 bg-[#F5F2ED]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={images[currentImage]}
                  alt={`Terraza ${currentImage + 1}`}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
              >
                <ChevronLeft className="text-[#9B2C2C]" size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
              >
                <ChevronRight className="text-[#9B2C2C]" size={24} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImage ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Descripción */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[#5A5F4D] mb-8 text-center">
              Gracias a los <strong>60 metros cuadrados</strong> y las estupendas vistas que ofrece
              el Valle de Baztán-Bidasoa, la terraza se presta en días de primavera y verano al
              desarrollo de actividades mindfulness, yoga, meditación, así como a comidas al aire libre.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-[#F5F2ED] rounded-lg p-6 text-center">
                <Mountain className="text-[#9B2C2C] mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2" style={{fontFamily: "'Playfair Display', serif"}}>Vistas Panorámicas</h3>
                <p className="text-[#5A5F4D]">Contempla el Valle de Baztán-Bidasoa</p>
              </div>
              <div className="bg-[#F5F2ED] rounded-lg p-6 text-center">
                <Sun className="text-[#9B2C2C] mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2" style={{fontFamily: "'Playfair Display', serif"}}>Luz Natural</h3>
                <p className="text-[#5A5F4D]">Orientación perfecta para todo el día</p>
              </div>
              <div className="bg-[#F5F2ED] rounded-lg p-6 text-center">
                <Wind className="text-[#9B2C2C] mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2" style={{fontFamily: "'Playfair Display', serif"}}>Amplitud</h3>
                <p className="text-[#5A5F4D]">60m² para actividades en grupo</p>
              </div>
            </div>

            <div className="bg-[#9B2C2C]/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4" style={{fontFamily: "'Playfair Display', serif"}}>Conectada con el Comedor</h3>
              <p className="text-[#5A5F4D] mb-4">
                La terraza está directamente conectada con el comedor principal de la casa, lo que facilita
                la organización de comidas y eventos al aire libre sin perder la comodidad del interior.
              </p>
              <p className="text-[#5A5F4D]">
                Ofrece un espacio amplio donde disfrutar del día, ya sea para prácticas de yoga matutino,
                sesiones de meditación al atardecer o simplemente para tomar el café contemplando las montañas.
              </p>
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
            Reserva tu retiro con vistas
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Ideal para grupos de yoga, mindfulness o simplemente disfrutar de la naturaleza
          </p>
          <Link
            to="/contacto"
            className="inline-block px-8 py-4 bg-white text-[#9B2C2C] rounded hover:bg-gray-100 transition-all"
          >
            Contactar
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Terraza;