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
              <img src="/Logo_Balizadgt.png" alt="Baliza DGT V16" className="h-16" />
            </div>
            <p className="text-gray-300 mb-4 text-base">
              Distribuidor oficial de balizas V16 certificadas IDIADA. Tecnología homologada DGT con garantía de cumplimiento normativo.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={22} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={22} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={22} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-gray-300 text-base">
              <li><a href="#productos" className="hover:text-white transition-colors">Challux V16 CH-019 Premium</a></li>
              <li><a href="#productos" className="hover:text-white transition-colors">Certificación IDIADA</a></li>
              <li><a href="#productos" className="hover:text-white transition-colors">Características Técnicas</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Información</h4>
            <ul className="space-y-2 text-gray-300 text-base">
              <li><a href="#normativa" className="hover:text-white transition-colors">Normativa DGT</a></li>
              <li><a href="#normativa" className="hover:text-white transition-colors">Guía de Uso</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors text-left">Garantía y Devoluciones</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-300 text-base">
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <a href="tel:+34900123456" className="hover:text-white transition-colors">900 123 456</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <a href="mailto:info@balizadgt.es" className="hover:text-white transition-colors">info@balizadgt.es</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} />
                <span>Madrid, España</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-900 rounded-lg">
              <h5 className="font-semibold mb-2 text-base">Horario de Atención</h5>
              <p className="text-base text-blue-100">
                Lun - Vie: 9:00 - 18:00<br />
                Sáb: 10:00 - 14:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-base text-gray-400">
            <span>&copy; 2024 BalizaDGT.es - Todos los derechos reservados</span>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Política de Privacidad</button>
              <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">Términos y Condiciones</button>
              <button onClick={() => onNavigate('cookies')} className="hover:text-white transition-colors">Cookies</button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Shield className="text-green-500" size={18} />
            <span className="text-base text-gray-400">Certificado IDIADA PC25050254</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;