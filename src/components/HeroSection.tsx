import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <MapPin className="h-4 w-4 mr-2" />
                Servicio en Avellaneda
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Comprá en Avellaneda con 
              <span className="text-blue-600 block">total seguridad</span>
              <span className="text-gray-600 text-2xl md:text-3xl lg:text-4xl block mt-2">
                estés donde estés
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Validamos por vos la existencia del local y la mercadería antes de que pagues. 
              Tu tranquilidad es nuestra prioridad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                Solicitar verificación ahora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#como-funciona"
                className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200"
              >
                Ver cómo funciona
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Verificaciones realizadas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Clientes satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">24h</div>
                <div className="text-sm text-gray-600">Tiempo promedio</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Verificación de mercadería en Avellaneda"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Verificación completada</div>
                  <div className="text-sm text-gray-600">Local y mercadería validados ✓</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;