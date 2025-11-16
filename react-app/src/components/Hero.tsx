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
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                OBLIGATORIO 2026
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Challux V16
              <span className="block text-yellow-400">DGT Oficial</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Balizas V16 certificadas IDIADA con tecnología Challux. Homologadas oficialmente por la DGT para cumplir la normativa obligatoria desde 2026.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
                Comprar Ahora
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                Ver Productos
              </button>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="text-green-400" size={20} />
                <span>Certificado IDIADA</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-400" size={20} />
                <span>GPS + NB-IoT</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-green-400" size={20} />
                <span>Tecnología Challux</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img
                src="https://images.pexels.com/photos/163792/model-car-land-vehicle-toy-car-163792.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Challux V16 Certificada DGT"
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="font-bold">Desde 89€</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;