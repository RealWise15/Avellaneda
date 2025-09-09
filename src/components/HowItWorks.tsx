import React from 'react';
import { Send, MapPin, Camera, FileCheck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Send,
      title: "Nos enviás los datos",
      description: "Completás un formulario simple con la información del local y la mercadería que querés verificar.",
      details: ["Dirección del local", "Tipo de mercadería", "Fotos de referencia", "Detalles específicos a verificar"]
    },
    {
      icon: MapPin,
      title: "Un verificador va al local",
      description: "Nuestro equipo se dirige al local físico en Avellaneda para realizar la verificación presencial.",
      details: ["Confirmación de la dirección", "Horarios de atención", "Estado del local", "Accesibilidad"]
    },
    {
      icon: Camera,
      title: "Documentamos todo",
      description: "Tomamos fotos, videos y recopilamos toda la información necesaria para el informe completo.",
      details: ["Fotos HD de la mercadería", "Video del local", "Verificación de precios", "Estado de los productos"]
    },
    {
      icon: FileCheck,
      title: "Te enviamos el informe",
      description: "Recibís un reporte detallado con fotos, video y toda la información en menos de 24 horas.",
      details: ["Informe en PDF profesional", "Galería de fotos", "Video de verificación", "Recomendaciones"]
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Cómo funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un proceso simple y transparente que te da la tranquilidad que necesitás para comprar con confianza.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-200 z-10">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="h-8 w-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                {/* Icon */}
                <div className="flex items-center justify-center mb-6 mt-2">
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  
                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-gray-500">
                        <div className="h-1.5 w-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional section */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicio opcional</h3>
            <p className="text-lg text-gray-600 mb-6">
              Si todo está en orden, también podemos gestionar la reserva y compra por vos
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Gestión de reserva</h4>
                <p className="text-gray-600 text-sm">Separamos la mercadería por 48hs para que puedas organizarte</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Gestión de compra</h4>
                <p className="text-gray-600 text-sm">Manejamos la negociación y compra completa en tu nombre</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;