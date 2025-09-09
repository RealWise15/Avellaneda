import React from 'react';
import { Shield, Camera, FileText, CheckCircle } from 'lucide-react';

const SolutionSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Verificación presencial",
      description: "Visitamos el local físicamente para confirmar su existencia"
    },
    {
      icon: Camera,
      title: "Documentación visual",
      description: "Tomamos fotos y videos de alta calidad de la mercadería"
    },
    {
      icon: FileText,
      title: "Informe detallado",
      description: "Recibís un reporte completo en PDF con toda la información"
    },
    {
      icon: CheckCircle,
      title: "Garantía de confianza",
      description: "Tu tranquilidad respaldada por nuestra experiencia"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tu comprador de confianza en Avellaneda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vamos al local, validamos que exista, comprobamos la mercadería y te enviamos 
            un informe con fotos, videos y un reporte detallado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/7688080/pexels-photo-7688080.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Verificando mercadería en tienda"
              className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-900">Verificación en curso</span>
              </div>
            </div>
          </div>
        </div>

        {/* Process preview */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Proceso de verificación</h3>
            <p className="text-gray-600">Simple, rápido y confiable</p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Recibimos tu solicitud</h4>
              <p className="text-gray-600 text-sm">Con datos del local y mercadería a verificar</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Realizamos la verificación</h4>
              <p className="text-gray-600 text-sm">Visitamos el local y documentamos todo</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Enviamos el informe</h4>
              <p className="text-gray-600 text-sm">Fotos, video y reporte detallado en PDF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;