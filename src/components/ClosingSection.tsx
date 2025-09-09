import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const ClosingSection = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="h-20 w-20 bg-white/20 rounded-full flex items-center justify-center">
            <Shield className="h-10 w-10 text-white" />
          </div>
        </div>

        {/* Main Message */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Comprá en Avellaneda con 
          <span className="block text-yellow-300">seguridad y confianza,</span>
          aunque estés a cientos de kilómetros
        </h2>

        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          No dejes que la distancia te impida hacer buenos negocios. 
          Nosotros somos tus ojos y oídos en Avellaneda.
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToContact}
          className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-6 px-12 rounded-full text-xl transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center mx-auto group mb-8"
        >
          Quiero verificar mi compra ahora
          <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
        </button>

        {/* Guarantee */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
          <p className="text-white font-medium">
            ✅ Respuesta en menos de 2 horas<br />
            ✅ Informe detallado garantizado<br />
            ✅ 98% de clientes satisfechos
          </p>
        </div>

        {/* Urgency Message */}
        <div className="mt-8 text-yellow-200">
          <p className="text-lg font-medium">
            🔥 Solo por tiempo limitado: <span className="text-yellow-300">10% de descuento en tu primera verificación</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;