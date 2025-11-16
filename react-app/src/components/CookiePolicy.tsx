import React from 'react';
import { Cookie, Settings, Eye, Target } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Cookie className="w-16 h-16 text-blue-900 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Política de Cookies</h1>
        <p className="text-gray-600">
          Información sobre el uso de cookies en BalizaV16.es
        </p>
      </div>

      <div className="prose max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">¿Qué son las cookies?</h2>
          <p className="text-blue-700">
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos ayudan a mejorar tu experiencia de navegación y a entender cómo utilizas nuestro sitio.
          </p>
        </div>

        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Settings className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Tipos de Cookies que Utilizamos</h2>
          </div>
          
          <div className="space-y-6 ml-9">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Cookies Esenciales</h3>
              <p className="text-red-700 mb-3">
                Estas cookies son necesarias para el funcionamiento básico del sitio web y no se pueden desactivar.
              </p>
              <ul className="list-disc list-inside text-red-600 space-y-1">
                <li>Gestión de sesiones de usuario</li>
                <li>Carrito de compras</li>
                <li>Preferencias de idioma</li>
                <li>Seguridad y autenticación</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Cookies Analíticas</h3>
              <p className="text-yellow-700 mb-3">
                Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
              </p>
              <ul className="list-disc list-inside text-yellow-600 space-y-1">
                <li>Google Analytics</li>
                <li>Estadísticas de páginas visitadas</li>
                <li>Tiempo de permanencia</li>
                <li>Fuentes de tráfico</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Cookies de Funcionalidad</h3>
              <p className="text-green-700 mb-3">
                Mejoran la funcionalidad del sitio web y tu experiencia de usuario.
              </p>
              <ul className="list-disc list-inside text-green-600 space-y-1">
                <li>Recordar preferencias de usuario</li>
                <li>Configuración de visualización</li>
                <li>Productos vistos recientemente</li>
                <li>Lista de deseos</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Cookies de Marketing</h3>
              <p className="text-purple-700 mb-3">
                Se utilizan para mostrar anuncios relevantes y medir la efectividad de las campañas.
              </p>
              <ul className="list-disc list-inside text-purple-600 space-y-1">
                <li>Google Ads</li>
                <li>Facebook Pixel</li>
                <li>Remarketing</li>
                <li>Análisis de conversiones</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Eye className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Cookies de Terceros</h2>
          </div>
          
          <div className="ml-9 space-y-4 text-gray-600">
            <p>
              Algunos de nuestros socios también pueden establecer cookies en tu dispositivo cuando visitas nuestro sitio:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Google Analytics</h4>
                <p className="text-sm text-gray-600">
                  Para análisis de tráfico web y comportamiento de usuarios
                </p>
                <a href="https://policies.google.com/privacy" className="text-blue-600 text-sm hover:underline">
                  Política de privacidad de Google
                </a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Stripe</h4>
                <p className="text-sm text-gray-600">
                  Para procesamiento seguro de pagos
                </p>
                <a href="https://stripe.com/privacy" className="text-blue-600 text-sm hover:underline">
                  Política de privacidad de Stripe
                </a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">PayPal</h4>
                <p className="text-sm text-gray-600">
                  Para pagos a través de PayPal
                </p>
                <a href="https://www.paypal.com/privacy" className="text-blue-600 text-sm hover:underline">
                  Política de privacidad de PayPal
                </a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Redes Sociales</h4>
                <p className="text-sm text-gray-600">
                  Facebook, Instagram, TikTok para integración social
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Target className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Gestión de Cookies</h2>
          </div>
          
          <div className="ml-9 space-y-4 text-gray-600">
            <p>
              Puedes controlar y gestionar las cookies de varias maneras:
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Panel de Configuración</h4>
              <p className="text-blue-700 mb-3">
                Utiliza nuestro panel de configuración de cookies para personalizar tus preferencias:
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Configurar Cookies
              </button>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Configuración del Navegador</h4>
              <p className="text-gray-600 mb-2">
                También puedes gestionar las cookies directamente desde tu navegador:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                <li><strong>Firefox:</strong> Preferencias → Privacidad y seguridad</li>
                <li><strong>Safari:</strong> Preferencias → Privacidad</li>
                <li><strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Duración de las Cookies</h2>
          
          <div className="space-y-4 text-gray-600">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Cookies de Sesión</h4>
                <p className="text-orange-700 text-sm">
                  Se eliminan automáticamente cuando cierras el navegador
                </p>
              </div>
              
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <h4 className="font-semibold text-indigo-800 mb-2">Cookies Persistentes</h4>
                <p className="text-indigo-700 text-sm">
                  Permanecen en tu dispositivo durante un período determinado (hasta 2 años)
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Consentimiento</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              Al continuar navegando por nuestro sitio web, aceptas el uso de cookies según se describe en esta política. Puedes retirar tu consentimiento en cualquier momento modificando la configuración de tu navegador o utilizando nuestro panel de configuración.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>Nota:</strong> Si desactivas las cookies esenciales, es posible que algunas funciones del sitio web no funcionen correctamente.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contacto</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-blue-800 mb-4">
              Si tienes preguntas sobre nuestra política de cookies, contáctanos:
            </p>
            
            <div className="space-y-2 text-blue-700">
              <p><strong>Email:</strong> cookies@balizav16.es</p>
              <p><strong>Teléfono:</strong> 900 123 456</p>
              <p><strong>Dirección:</strong> Calle Ejemplo 123, 28001 Madrid, España</p>
            </div>
          </div>
        </section>

        <div className="text-center text-sm text-gray-500 border-t pt-6">
          <p>Última actualización: Enero 2024</p>
          <p>Esta política puede ser actualizada periódicamente para reflejar cambios en nuestras prácticas.</p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;