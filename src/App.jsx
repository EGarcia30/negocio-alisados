import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Star, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

const HairSmoothingLanding = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const whatsappNumber = '50376234887'; // Reemplaza con tu número real
  
  const workImages = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
    'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800',
    'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800',
  ];

  const testimonials = [
    { name: 'María González', text: '¡Increíble! Mi cabello quedó sedoso y manejable. El servicio a domicilio fue súper cómodo.', rating: 5 },
    { name: 'Ana Martínez', text: 'El mejor alisado que me han hecho. Duró más de 4 meses perfecto. 100% recomendado.', rating: 5 },
    { name: 'Carmen López', text: 'Profesionales y dedicadas. El alisado brasileño de chocolate es maravilloso.', rating: 5 },
    { name: 'Sofía Ramírez', text: 'Excelente atención y resultados impecables. Volveré sin duda.', rating: 5 },
  ];

  const steps = [
    { number: '01', title: 'Consulta', desc: 'Evaluamos tu tipo de cabello y necesidades' },
    { number: '02', title: 'Lavado', desc: 'Limpieza profunda con productos premium' },
    { number: '03', title: 'Aplicación', desc: 'Alisado brasileño de chocolate profesional' },
    { number: '04', title: 'Sellado', desc: 'Planchado térmico para fijar el tratamiento' },
    { number: '05', title: 'Finalización', desc: 'Secado y styling para resultados perfectos' },
  ];

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % workImages.length);
    }, 4000);

    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

    return () => {
      clearInterval(imageTimer);
      clearInterval(testimonialTimer);
      observer.disconnect();
    };
  }, []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % workImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + workImages.length) % workImages.length);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const whatsappMessage = encodeURIComponent(`
  ¡Hola! 👋 Soy Josselin de Josselin Beauty ✨
  Especialista en alisados brasileños de chocolate y servicios a domicilio en San Salvador.

  ¿En qué puedo ayudarte hoy?
  ✅ Agendar alisado profesional
  ✅ Consulta gratis de tu cabello  
  ✅ Servicio a domicilio
  ✅ Paquetes especiales

  ¡Cuéntame qué necesitas! 💇‍♀️
  `);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Header con Video de Fondo */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920" 
            alt="Alisado profesional"
            className="w-full h-full object-cover opacity-60 animate-[scale_20s_ease-in-out_infinite_alternate]"
          />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl animate-[fadeIn_1.5s_ease-out]">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Alisado <span className="bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">Profesional</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
            Transforma tu cabello con nuestro exclusivo <span className="font-semibold text-amber-300">Alisado Brasileño de Chocolate</span>
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Tratamiento premium que nutre, alisa y protege tu cabello. Resultados duraderos con ingredientes de la más alta calidad. Tu belleza, nuestra pasión.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="group-hover:rotate-12 transition-transform" />
              Agenda tu Cita por WhatsApp
            </a>
          </div>

          <div className="mt-12 flex gap-8 justify-center text-white">
            <div className="flex items-center gap-2">
              <Clock className="text-amber-400" />
              <span>Lun - Sáb: 9AM - 7PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-rose-400" />
              <span>San Salvador</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </header>

      {/* Sección de Servicio a Domicilio */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto text-center" id="domicilio" data-animate>
          <div className={`transition-all duration-1000 ${isVisible.domicilio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block bg-green-100 text-green-700 px-6 py-2 rounded-full mb-6 font-semibold">
              <MessageCircle className="inline mr-2" size={20} />
              ¡Vamos hasta ti!
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Servicio a Domicilio
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Disfruta de nuestro alisado profesional en la comodidad de tu hogar. Llevamos todos los equipos y productos necesarios para brindarte el mejor servicio.
            </p>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola! Me interesa el servicio a domicilio.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="animate-pulse" />
              Solicitar Servicio a Domicilio
            </a>
          </div>
        </div>
      </section>

      {/* Pasos del Proceso */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto" id="pasos" data-animate>
          <div className={`transition-all duration-1000 ${isVisible.pasos ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
              Nuestro Proceso
            </h2>
            <p className="text-center text-gray-600 mb-16 text-lg">Pasos profesionales para un resultado perfecto</p>
            
            <div className="grid md:grid-cols-5 gap-8">
              {steps.map((step, idx) => (
                <div 
                  key={idx}
                  className="relative group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="bg-gradient-to-br from-white to-rose-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-rose-100">
                    <div className="text-5xl font-bold bg-gradient-to-br from-amber-400 to-rose-500 bg-clip-text text-transparent mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-amber-300 to-rose-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Trabajos */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-rose-50">
        <div className="max-w-6xl mx-auto" id="galeria" data-animate>
          <div className={`transition-all duration-1000 ${isVisible.galeria ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
              Nuestros Trabajos
            </h2>
            <p className="text-center text-gray-600 mb-16 text-lg">Resultados que hablan por sí solos</p>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                {workImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Trabajo ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                      idx === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all"
              >
                <ChevronLeft className="text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all"
              >
                <ChevronRight className="text-gray-800" />
              </button>

              <div className="flex justify-center gap-2 mt-6">
                {workImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentImage ? 'w-8 bg-gradient-to-r from-rose-500 to-amber-500' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto" id="testimonios" data-animate>
          <div className={`transition-all duration-1000 ${isVisible.testimonios ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
              Lo Que Dicen Nuestras Clientas
            </h2>
            <p className="text-center text-gray-600 mb-16 text-lg">Experiencias reales de personas satisfechas</p>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-rose-50 to-amber-50 p-8 md:p-12 rounded-3xl shadow-xl min-h-[280px] flex flex-col justify-between">
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className={`transition-all duration-700 ${
                      idx === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute'
                    }`}
                  >
                    <div className="flex gap-1 mb-4 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="fill-amber-400 text-amber-400" size={24} />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl text-gray-700 text-center mb-6 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <p className="text-center font-semibold text-gray-800 text-lg">— {testimonial.name}</p>
                  </div>
                ))}
              </div>
              
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transform hover:scale-110 transition-all"
              >
                <ChevronLeft className="text-gray-800" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transform hover:scale-110 transition-all"
              >
                <ChevronRight className="text-gray-800" />
              </button>

              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentTestimonial ? 'w-8 bg-gradient-to-r from-amber-500 to-rose-500' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="max-w-6xl mx-auto" id="ubicacion" data-animate>
          <div className={`transition-all duration-1000 ${isVisible.ubicacion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
              Visítanos
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">O agenda tu cita a domicilio</p>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Nuestras Ubicaciones</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl">
                    <MapPin className="text-rose-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">San Salvador Centro</p>
                      <p className="text-gray-600 text-sm">Centro Histórico</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl">
                    <MapPin className="text-rose-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Mejicanos</p>
                      <p className="text-gray-600 text-sm">Zona Norte</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl">
                    <MapPin className="text-rose-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Zacamil</p>
                      <p className="text-gray-600 text-sm">Área Metropolitana</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">💚 También a Domicilio</h4>
                  <p className="text-gray-600 mb-4">Llevamos nuestro servicio profesional hasta tu casa</p>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
                  >
                    <MessageCircle size={20} />
                    Agendar por WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="h-96 rounded-3xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124434.72266476934!2d-89.24315686250001!3d13.710305000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63304975af866f%3A0x4e5f2b6c7f3d7b0e!2sSan%20Salvador%2C%20El%20Salvador!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Ubicación"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">
                Alisado Profesional
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Especialistas en alisado brasileño de chocolate. Transformamos tu cabello con los mejores tratamientos del mercado.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-amber-400">Horarios</h4>
              <div className="space-y-2 text-gray-300">
                <p>Lunes - Viernes: 9:00 AM - 7:00 PM</p>
                <p>Sábados: 9:00 AM - 6:00 PM</p>
                <p>Domingos: Solo a domicilio</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-rose-400">Contacto</h4>
              <div className="space-y-3">
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors group"
                >
                  <MessageCircle className="group-hover:scale-110 transition-transform" />
                  WhatsApp
                </a>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin />
                  San Salvador, El Salvador
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Alisado Profesional. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Flotante */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transform hover:scale-110 transition-all duration-300 z-50 animate-pulse"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default HairSmoothingLanding;
