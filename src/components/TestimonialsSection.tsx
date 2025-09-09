import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      location: "Buenos Aires",
      business: "Boutique de ropa",
      rating: 5,
      text: "VerificaAvellaneda me salvó de una estafa de $80.000. El local que me habían mostrado por fotos no existía. El servicio es increíble, súper detallado y profesional.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Carlos Mendoza",
      location: "Córdoba",
      business: "Distribuidor mayorista",
      rating: 5,
      text: "Compro mercadería todas las semanas. Desde que uso este servicio, no tuve ni una sola mala experiencia. Las fotos y videos son súper claros, me ahorro viajes al pedo.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Laura Fernández",
      location: "Rosario",
      business: "E-commerce de textiles",
      rating: 5,
      text: "El plan mensual es perfecto para mi negocio. Verifico 8-10 locales por mes y el servicio siempre es impecable. Mis clientes compran con total confianza ahora.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Roberto Silva",
      location: "Mendoza",
      business: "Tienda de ropa deportiva",
      rating: 5,
      text: "El informe en PDF es súper completo. Tengo toda la información que necesito para decidir si comprar o no. El video del local me da mucha tranquilidad.",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Ana Rodríguez",
      location: "Tucumán",
      business: "Importadora textil",
      rating: 5,
      text: "Excelente servicio. La verificación fue súper rápida y el informe muy detallado. Me ahorraron un viaje de 1200 km al confirmar que todo estaba perfecto.",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Diego Martín",
      location: "Santa Fe",
      business: "Comerciante minorista",
      rating: 5,
      text: "Súper recomendable. El precio vale cada centavo comparado con lo que me ahorro en tiempo y el riesgo de ser estafado. Ya soy cliente fijo hace 6 meses.",
      avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de verificaciones realizadas, clientes satisfechos en todo el país
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 p-6">
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="h-8 w-8 text-blue-200" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
              
              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Verificaciones realizadas</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Clientes satisfechos</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">24h</div>
            <div className="text-gray-600">Tiempo promedio de entrega</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">150+</div>
            <div className="text-gray-600">Clientes regulares</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;