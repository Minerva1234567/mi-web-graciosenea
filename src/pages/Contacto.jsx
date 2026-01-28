import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fechas: '',
    personas: '',
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage(
        '¡Gracias por tu interés! Te contactaremos pronto para confirmar disponibilidad.'
      );
      setIsSubmitting(false);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        fechas: '',
        personas: '',
        mensaje: '',
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://customer-assets.emergentagent.com/job_b779bf07-1103-4cc2-b2d2-68140f1ddfce/artifacts/up789q9p_Paisaia_baztan%20%281%29.jpg"
            alt="Contacto Graciosenea"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1
            className="text-5xl md:text-6xl font-bold mb-4 text-[#FDFFD2]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Solicita tu estancia
          </h1>
          <p className="text-xl md:text-2xl">
            Rellena el formulario y nos pondremos en contacto contigo
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-[#F5F2ED]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9B2C2C]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9B2C2C]"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9B2C2C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fechas" className="block text-sm font-medium mb-2">
                        Fechas deseadas
                      </label>
                      <input
                        type="text"
                        id="fechas"
                        name="fechas"
                        value={formData.fechas}
                        onChange={handleChange}
                        placeholder="Ej: 15-20 de marzo"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9B2C2C]"
                      />
                    </div>
                    <div>
                      <label htmlFor="personas" className="block text-sm font-medium mb-2">
                        Número de personas
                      </label>
                      <input
                        type="number"
                        id="personas"
                        name="personas"
                        value={formData.personas}
                        onChange={handleChange}
                        min="1"
                        max="11"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9B2C2C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Cuéntanos qué tipo de estancia te interesa: turismo, aprendizaje colaborativo, retiro profesional..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9B2C2C]"
                    />
                  </div>

                  {submitMessage && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
                      {submitMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#9B2C2C] text-white rounded-md hover:bg-[#7d2323] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send size={20} />
                        Enviar solicitud
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Información de contacto
                </h3>
                <p className="text-[#5A5F4D] mb-6">
                  Preferimos el contacto directo para ofrecerte la mejor atención personalizada. Sin
                  comisiones, mejor precio garantizado.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold mb-1">Teléfono</p>
                      <a
                        href="tel:623151160"
                        className="text-[#5A5F4D] hover:text-[#9B2C2C] block"
                      >
                        623 15 11 60
                      </a>
                      <a
                        href="tel:623216031"
                        className="text-[#5A5F4D] hover:text-[#9B2C2C] block"
                      >
                        623 21 60 31
                      </a>
                      <p className="text-sm text-[#5A5F4D] mt-1">Preferente - Atención: Minerva</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a
                        href="mailto:gracioseneabaztan@gmail.com"
                        className="text-[#5A5F4D] hover:text-[#9B2C2C]"
                      >
                        gracioseneabaztan@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#9B2C2C] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold mb-1">Dirección</p>
                      <p className="text-[#5A5F4D]">
                        Bentak auzoa, nº6
                        <br />
                        31750, Donamaria (Navarra)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.446!2d-1.666667!3d43.166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDEwJzAwLjAiTiAxwrA0MCcwMC4wIlc!5e0!3m2!1ses!2ses!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de Graciosenea"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl font-bold mb-12 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Preguntas Frecuentes
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: '¿Puedo alquilar la casa completa o solo por habitaciones?',
                  a: 'Ofrecemos ambas opciones. Para fines de semana, la casa completa suele reservarse con más antelación. También puedes alquilar habitaciones individuales con acceso a zonas comunes.',
                },
                {
                  q: '¿Aceptan mascotas?',
                  a: 'Sí, amamos a los animales, pero te pedimos que consultes antes de la reserva, especialmente si hay talleres programados.',
                },
                {
                  q: '¿A qué distancia están los servicios básicos?',
                  a: 'Estamos en zona rural, pero Doneztebe/Santesteban está a solo 5 minutos en coche con todos los servicios (supermercados, farmacias, restaurantes).',
                },
                {
                  q: '¿Necesito conocimientos previos para el modelo de aprendizaje colaborativo?',
                  a: 'Absolutamente no. Los talleres están diseñados para principiantes que quieren ganar autonomía de forma segura.',
                },
                {
                  q: '¿Puedo alquilar Graciosenea para mi propio retiro?',
                  a: 'Sí, es una de nuestras especialidades. Nos encargamos de la logística y alimentación Km0. Escríbenos para tarifas personalizadas.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-[#F5F2ED] rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3">{faq.q}</h3>
                  <p className="text-[#5A5F4D]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#8B9A8E] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            ¿Prefieres llamarnos directamente?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Estamos disponibles para atenderte y resolver todas tus dudas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:623151160"
              className="inline-block px-8 py-4 bg-white text-[#8B9A8E] rounded hover:bg-gray-100 transition-all"
            >
              Llamar: 623 15 11 60
            </a>
            <a
              href="tel:623216031"
              className="inline-block px-8 py-4 border-2 border-white text-white rounded hover:bg-white hover:text-[#8B9A8E] transition-all"
            >
              Llamar: 623 21 60 31
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;