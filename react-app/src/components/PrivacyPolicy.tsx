import React from 'react';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Shield className="w-16 h-16 text-blue-900 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Política de Privacidad</h1>
        <p className="text-gray-600">
          En BalizaV16.es nos comprometemos a proteger tu privacidad y datos personales
        </p>
      </div>

      <div className="prose max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Información General</h2>
          <p className="text-blue-700">
            Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos tu información personal cuando utilizas nuestro sitio web y servicios.
          </p>
        </div>

        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Eye className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">1. Información que Recopilamos</h2>
          </div>
          
          <div className="space-y-4 ml-9">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Información Personal</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Nombre y apellidos</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Dirección postal</li>
                <li>Información de pago (procesada de forma segura)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Información Técnica</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Dirección IP</li>
                <li>Tipo de navegador y versión</li>
                <li>Páginas visitadas y tiempo de permanencia</li>
                <li>Cookies y tecnologías similares</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center mb-4">
            <UserCheck className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">2. Cómo Utilizamos tu Información</h2>
          </div>
          
          <div className="ml-9 space-y-3 text-gray-600">
            <p>• <strong>Procesamiento de pedidos:</strong> Para gestionar tus compras y envíos</p>
            <p>• <strong>Comunicación:</strong> Para enviarte confirmaciones, actualizaciones y soporte</p>
            <p>• <strong>Mejora del servicio:</strong> Para analizar el uso del sitio y mejorar la experiencia</p>
            <p>• <strong>Marketing:</strong> Para enviarte ofertas y promociones (solo con tu consentimiento)</p>
            <p>• <strong>Cumplimiento legal:</strong> Para cumplir con obligaciones legales y fiscales</p>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Lock className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">3. Protección de Datos</h2>
          </div>
          
          <div className="ml-9 space-y-4 text-gray-600">
            <p>
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal contra el acceso no autorizado, alteración, divulgación o destrucción.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Medidas de Seguridad:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Cifrado SSL/TLS para todas las transmisiones</li>
                <li>Servidores seguros con acceso restringido</li>
                <li>Auditorías regulares de seguridad</li>
                <li>Formación del personal en protección de datos</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Tus Derechos</h2>
          
          <div className="space-y-3 text-gray-600">
            <p>Bajo el RGPD, tienes los siguientes derechos:</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Derecho de Acceso</h4>
                <p className="text-sm text-blue-700">Solicitar una copia de tus datos personales</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Derecho de Rectificación</h4>
                <p className="text-sm text-green-700">Corregir datos inexactos o incompletos</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Derecho de Supresión</h4>
                <p className="text-sm text-yellow-700">Solicitar la eliminación de tus datos</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Derecho de Portabilidad</h4>
                <p className="text-sm text-purple-700">Recibir tus datos en formato estructurado</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Tipos de Cookies:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Esenciales:</strong> Necesarias para el funcionamiento del sitio</li>
                <li><strong>Analíticas:</strong> Para entender cómo usas el sitio</li>
                <li><strong>Marketing:</strong> Para personalizar anuncios y ofertas</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contacto</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-blue-800 mb-4">
              Si tienes preguntas sobre esta política de privacidad o quieres ejercer tus derechos, contáctanos:
            </p>
            
            <div className="space-y-2 text-blue-700">
              <p><strong>Email:</strong> privacidad@balizav16.es</p>
              <p><strong>Teléfono:</strong> 900 123 456</p>
              <p><strong>Dirección:</strong> Calle Ejemplo 123, 28001 Madrid, España</p>
            </div>
          </div>
        </section>

        <div className="text-center text-sm text-gray-500 border-t pt-6">
          <p>Última actualización: Enero 2024</p>
          <p>Esta política puede ser actualizada periódicamente. Te notificaremos de cambios importantes.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;