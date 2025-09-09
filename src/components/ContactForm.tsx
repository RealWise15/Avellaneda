import React, { useState } from 'react';
import { Send, Mail, User, MapPin, Package } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    localAddress: '',
    merchandise: '',
    plan: 'completo',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('¡Gracias! Te contactaremos pronto para coordinar la verificación.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Solicitá tu verificación ahora
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Completá el formulario y te contactaremos para coordinar la verificación de tu local en Avellaneda
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline h-4 w-4 mr-1" />
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline h-4 w-4 mr-1" />
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="+54 11 1234-5678"
              />
            </div>

            {/* Local Information */}
            <div>
              <label htmlFor="localAddress" className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline h-4 w-4 mr-1" />
                Dirección del local en Avellaneda *
              </label>
              <input
                type="text"
                id="localAddress"
                name="localAddress"
                required
                value={formData.localAddress}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Ej: Av. Mitre 1234, Avellaneda"
              />
            </div>

            <div>
              <label htmlFor="merchandise" className="block text-sm font-medium text-gray-700 mb-2">
                <Package className="inline h-4 w-4 mr-1" />
                Mercadería a verificar *
              </label>
              <textarea
                id="merchandise"
                name="merchandise"
                required
                rows={3}
                value={formData.merchandise}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Descripción detallada de qué mercadería querés que verifiquemos (tipo, cantidad, características específicas, etc.)"
              />
            </div>

            {/* Plan Selection */}
            <div>
              <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-2">
                Plan elegido *
              </label>
              <select
                id="plan"
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="basico">Básico - $9.000</option>
                <option value="completo">Completo - $13.500 (Recomendado)</option>
                <option value="premium">Premium - $22.500</option>
                <option value="mensual-5">Plan Mensual 5 verificaciones - $65.000</option>
                <option value="mensual-10">Plan Mensual 10 verificaciones - $110.000</option>
              </select>
            </div>

            {/* Additional Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Información adicional
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="¿Hay algo específico que querés que verifiquemos? ¿Tenés alguna duda sobre el servicio?"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto group"
              >
                <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Solicitar verificación
              </button>
              
              <p className="text-sm text-gray-600 mt-4">
                Te contactaremos en menos de 2 horas para coordinar los detalles
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;