import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "5491123456789"; // Replace with actual WhatsApp number
  const message = "Hola! Me interesa el servicio de verificación en Avellaneda. ¿Podrían darme más información?";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50 group animate-bounce hover:animate-none"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <div className="absolute right-0 bottom-16 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Consultá por WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
    </button>
  );
};

export default WhatsAppButton;