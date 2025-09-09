import React from 'react';
import { Shield, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">VerificaAvellaneda</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#como-funciona" className="text-gray-600 hover:text-blue-600 transition-colors">
              Cómo funciona
            </a>
            <a href="#precios" className="text-gray-600 hover:text-blue-600 transition-colors">
              Precios
            </a>
            <a href="#testimonios" className="text-gray-600 hover:text-blue-600 transition-colors">
              Testimonios
            </a>
          </div>
          
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">+54 11 1234-5678</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;