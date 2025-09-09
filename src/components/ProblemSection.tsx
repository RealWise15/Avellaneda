import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: X,
      text: "Locales que no existen",
      description: "Direcciones falsas o comercios cerrados"
    },
    {
      icon: X,
      text: "Mercadería distinta a la publicada",
      description: "Productos de menor calidad o diferentes características"
    },
    {
      icon: X,
      text: "Pérdida de dinero y tiempo",
      description: "Transferencias sin respaldo y viajes infructuosos"
    }
  ];

  return (
    <section className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="h-12 w-12 text-red-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            El problema que enfrentan miles de compradores
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Muchos clientes que compran a distancia en Avellaneda terminan estafados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problems list */}
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm border border-red-100">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center">
                    <problem.icon className="h-5 w-5 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{problem.text}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Comprador preocupado"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-900">
                  "Perdí $50.000 en una estafa. El local no existía y nunca pude recuperar mi dinero."
                </p>
                <p className="text-xs text-gray-600 mt-2">- Cliente afectado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;