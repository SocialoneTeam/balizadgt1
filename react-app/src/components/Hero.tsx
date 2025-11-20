import React from 'react';
import { Shield, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="text-yellow-400" size={28} />
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-base font-semibold">
                OBLIGATORIO 2026
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Baliza V16
              <span className="block text-yellow-400">Certificada DGT</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
              Baliza V16 certificada IDIADA PC25050254. Homologada oficialmente por la DGT para cumplir la normativa obligatoria desde el 1 de enero de 2026.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#productos" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg text-center">
                Comprar Ahora
              </a>
              <a href="#productos" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all text-center">
                Ver Producto
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-base">
              <div className="flex items-center space-x-2">
                <Shield className="text-green-400" size={22} />
                <span>Certificado IDIADA</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-400" size={22} />
                <span>GPS + NB-IoT</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-green-400" size={22} />
                <span>Envío Gratuito</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img
                src="https://images.pexels.com/photos/163792/model-car-land-vehicle-toy-car-163792.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Baliza V16 Certificada DGT IDIADA"
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg">
                <span className="font-bold text-lg">129€</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;