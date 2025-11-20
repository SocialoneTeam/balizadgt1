import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Phone, MapPin } from 'lucide-react';

interface HeaderProps {
  cartItems: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={16} />
              <a href="tel:+34900123456" className="hover:underline">900 123 456</a>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={16} />
              <span className="text-base">Envío gratuito a toda España</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-medium text-base">Obligatorio desde el 1 de enero de 2026</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="/Logo_Balizadgt.png" alt="Baliza DGT V16" className="h-12" />
            <span className="ml-3 text-base text-gray-600 hidden sm:block">Certificado IDIADA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-900 font-medium transition-colors text-base">
              Inicio
            </a>
            <a href="#productos" className="text-gray-700 hover:text-blue-900 font-medium transition-colors text-base">
              Producto
            </a>
            <a href="#normativa" className="text-gray-700 hover:text-blue-900 font-medium transition-colors text-base">
              Normativa
            </a>
            <a href="#faq" className="text-gray-700 hover:text-blue-900 font-medium transition-colors text-base">
              FAQ
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-900 font-medium transition-colors text-base">
              Contacto
            </a>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-blue-900 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2 text-gray-700 hover:text-blue-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-900 font-medium text-base">
                Inicio
              </a>
              <a href="#productos" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-900 font-medium text-base">
                Producto
              </a>
              <a href="#normativa" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-900 font-medium text-base">
                Normativa
              </a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-900 font-medium text-base">
                FAQ
              </a>
              <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-900 font-medium text-base">
                Contacto
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;