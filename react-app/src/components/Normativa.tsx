import React from 'react';
import { Calendar, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const Normativa: React.FC = () => {
  return (
    <section id="normativa" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Normativa DGT Oficial - Real Decreto 1030/2022
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Información oficial sobre el Real Decreto 1030/2022 que establece la obligatoriedad de la baliza V16 desde el 1 de enero de 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Certificado IDIADA DGT"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          <div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
              <div className="flex items-center mb-3">
                <Calendar className="text-blue-600 mr-3" size={24} />
                <h3 className="text-lg font-semibold text-blue-800">Real Decreto 1030/2022</h3>
              </div>
              <p className="text-blue-700">
                <strong>Fecha de obligatoriedad:</strong> 1 de enero de 2026. Todas las balizas V16 deben estar certificadas por organismos oficiales como IDIADA.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-green-800 mb-2">✅ Certificación IDIADA</h4>
              <p className="text-green-700 text-sm">
                Nuestras balizas Challux cuentan con certificado IDIADA PC25050254, garantizando el cumplimiento oficial de la normativa DGT.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">GPS + NB-IoT</h4>
                  <p className="text-gray-600">Sistema de geolocalización conectado con la plataforma DGT 3.0 de Telefónica Tech.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">12 LEDs Super Brillantes</h4>
                  <p className="text-gray-600">Visibilidad 360° con intensidad 40-700cd, visible hasta 1 milla de distancia.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Tecnología Avanzada</h4>
                  <p className="text-gray-600">Activación en 0.4 segundos, resistencia IP54 y conectividad con servicios de emergencia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Comparativa: Triángulos vs Baliza V16
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <XCircle className="text-red-600 mr-3" size={24} />
                <h4 className="text-lg font-semibold text-gray-900">Triángulos (Hasta 2025)</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Requiere salir del vehículo</li>
                <li>• Riesgo de atropello</li>
                <li>• No geolocalizable</li>
                <li>• Visibilidad limitada</li>
                <li>• Puede perderse o romperse</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-green-200">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-3" size={24} />
                <h4 className="text-lg font-semibold text-gray-900">Baliza V16 (Desde 2026)</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Activación desde el interior del vehículo</li>
                <li>• Mayor seguridad personal</li>
                <li>• Geolocalización GPS</li>
                <li>• Visibilidad 360º mejorada</li>
                <li>• Resistente y duradera</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Normativa;