import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Básico",
      price: "$9.000",
      icon: Check,
      description: "Verificación rápida de local y producto",
      features: [
        "Verificación de existencia del local",
        "Confirmación de mercadería disponible",
        "Fotos básicas del local",
        "Informe simple por WhatsApp",
        "Entrega en 24-48 horas"
      ],
      cta: "Elegir Básico",
      popular: false
    },
    {
      name: "Completo",
      price: "$13.500",
      icon: Star,
      description: "Fotos + video + informe en PDF",
      features: [
        "Todo lo del plan Básico",
        "Fotos detalladas HD de la mercadería",
        "Video de 2-3 minutos del local",
        "Informe profesional en PDF",
        "Verificación de precios",
        "Entrega en 24 horas"
      ],
      cta: "Elegir Completo",
      popular: true
    },
    {
      name: "Premium",
      price: "$22.500",
      icon: Zap,
      description: "Verificación completa + reserva de mercadería",
      features: [
        "Todo lo del plan Completo",
        "Reserva de mercadería por 48hs",
        "Negotiación de precios",
        "Video llamada en vivo opcional",
        "Gestión de la compra",
        "Garantía de devolución",
        "Entrega en 12-24 horas"
      ],
      cta: "Elegir Premium",
      popular: false
    }
  ];

  const monthlyPlans = [
    { verifications: 5, price: "$65.000", savings: "Ahorrás $10.000" },
    { verifications: 10, price: "$110.000", savings: "Ahorrás $25.000" }
  ];

  return (
    <section id="precios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Planes y Precios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elegí el plan que mejor se adapte a tus necesidades. Sin letra chica, sin sorpresas.
          </p>
        </div>

        {/* Individual Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg transition-all duration-200 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className={`h-16 w-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    plan.popular ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <plan.icon className={`h-8 w-8 ${
                      plan.popular ? 'text-blue-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Monthly Plans for Bulk Buyers */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Planes mensuales para mayoristas
            </h3>
            <p className="text-xl text-gray-600">
              Ahorrá comprando verificaciones en paquetes mensuales
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {monthlyPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{plan.verifications} verificaciones</div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">{plan.price}/mes</div>
                  <div className="text-green-600 font-medium mb-4">{plan.savings}</div>
                  <p className="text-gray-600 mb-6">
                    Perfecto para distribuidores y mayoristas que necesitan verificaciones regulares
                  </p>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                    Contratar plan mensual
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Contratar servicio ahora
          </button>
          <p className="text-gray-600 mt-4">¿Tenés dudas? <a href="#" className="text-blue-600 hover:underline">Consultanos por WhatsApp</a></p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;