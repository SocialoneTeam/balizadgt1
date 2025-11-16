import React from 'react';
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'checkout' | 'confirmation' | 'privacy' | 'terms' | 'cookies') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold">
                Challux<span className="text-red-500">V16</span>
              </h3>
              <Shield className="ml-2 text-blue-400" size={24} />
            </div>
            <p className="text-gray-300 mb-4">
              Distribuidor oficial de balizas V16 Challux certificadas IDIADA. Tecnología homologada DGT con garantía de cumplimiento normativo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-2.54v5.79c0 2.84-2.26 5.14-5.09 5.14a5.09 5.09 0 0 1-5.09-5.14V2H1.46v5.79c0 4.42 3.4 8.07 7.73 8.07s7.73-3.65 7.73-8.07V2h-2.54v.44a4.83 4.83 0 0 1-3.77 4.25z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Challux V16 CH-019 Premium</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Challux V16 CH-015 Estándar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Challux V16 CH-020L Pro</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kits de Emergencia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accesorios</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Información</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Normativa DGT</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guía de Instalación</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Garantía</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Devoluciones</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span>900 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span>info@balizav16.es</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span>Madrid, España</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-900 rounded-lg">
              <h5 className="font-semibold mb-2">Horario de Atención</h5>
              <p className="text-sm text-blue-100">
                Lun - Vie: 9:00 - 18:00<br />
                Sáb: 10:00 - 14:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-400">
            <span>&copy; 2024 BalizaV16.es - Todos los derechos reservados</span>
            <div className="flex space-x-4">
              <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Política de Privacidad</button>
              <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">Términos y Condiciones</button>
              <button onClick={() => onNavigate('cookies')} className="hover:text-white transition-colors">Cookies</button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Shield className="text-green-500" size={16} />
            <span className="text-sm text-gray-400">Certificado IDIADA PC25050254</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;