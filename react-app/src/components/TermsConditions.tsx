import React from 'react';
import { FileText, Scale, ShoppingCart, Truck } from 'lucide-react';

const TermsConditions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <FileText className="w-16 h-16 text-blue-900 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Términos y Condiciones</h1>
        <p className="text-gray-600">
          Condiciones generales de uso y venta de BalizaV16.es
        </p>
      </div>

      <div className="prose max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Información Legal</h2>
          <div className="text-blue-700 space-y-1">
            <p><strong>Razón Social:</strong> BalizaV16 S.L.</p>
            <p><strong>CIF:</strong> B-12345678</p>
            <p><strong>Dirección:</strong> Calle Ejemplo 123, 28001 Madrid, España</p>
            <p><strong>Email:</strong> info@balizav16.es</p>
            <p><strong>Teléfono:</strong> 900 123 456</p>
          </div>
        </div>

        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Scale className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">1. Objeto y Ámbito de Aplicación</h2>
          </div>
          
          <div className="ml-9 space-y-4 text-gray-600">
            <p>
              Los presentes términos y condiciones regulan el uso del sitio web www.balizav16.es y la compra de productos a través del mismo. Al utilizar nuestro sitio web y realizar una compra, aceptas estos términos en su totalidad.
            </p>
            
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center mb-4">
            <ShoppingCart className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">2. Productos y Precios</h2>
          </div>
          
          <div className="ml-9 space-y-4 text-gray-600">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Productos</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Todos nuestros productos están homologados por la DGT</li>
                <li>Las especificaciones técnicas están disponibles en cada ficha de producto</li>
                <li>Las imágenes son orientativas y pueden diferir ligeramente del producto real</li>
                <li>Nos reservamos el derecho de modificar las especificaciones sin previo aviso</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Precios</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Todos los precios incluyen IVA (21%)</li>
                <li>Los precios pueden cambiar sin previo aviso</li>
                <li>El precio aplicable será el vigente en el momento de la compra</li>
                <li>Los gastos de envío se calculan según el destino y peso del pedido</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Proceso de Compra</h2>
          
          <div className="space-y-4 text-gray-600">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Pasos del Proceso:</h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>Selección de productos y añadir al carrito</li>
                <li>Revisión del pedido y datos de envío</li>
                <li>Selección del método de pago</li>
                <li>Confirmación del pedido</li>
                <li>Recepción del email de confirmación</li>
              </ol>
            </div>
            
            <p>
              Una vez confirmado el pedido, recibirás un email con el número de pedido y los detalles de la compra. Este email constituye la confirmación de que hemos recibido tu pedido.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Métodos de Pago</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>Aceptamos los siguientes métodos de pago:</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Tarjetas de Crédito/Débito</h4>
                <p className="text-sm text-blue-700">Visa, Mastercard, American Express</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">PayPal</h4>
                <p className="text-sm text-yellow-700">Pago seguro a través de PayPal</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Google Pay</h4>
                <p className="text-sm text-green-700">Pago rápido con Google Pay</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Apple Pay</h4>
                <p className="text-sm text-gray-700">Pago seguro con Apple Pay</p>
              </div>
            </div>
            
            <p>
              Todos los pagos se procesan de forma segura utilizando cifrado SSL. No almacenamos información de tarjetas de crédito en nuestros servidores.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Truck className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">5. Envío y Entrega</h2>
          </div>
          
          <div className="ml-9 space-y-4 text-gray-600">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Plazos de Entrega</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Península: 2-3 días laborables</li>
                <li>Baleares: 3-5 días laborables</li>
                <li>Canarias: 5-7 días laborables</li>
                <li>Ceuta y Melilla: 5-7 días laborables</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Gastos de Envío</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Envío gratuito en pedidos superiores a 100€</li>
                <li>Península: 9,99€</li>
                <li>Baleares: 14,99€</li>
                <li>Canarias, Ceuta y Melilla: 19,99€</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Derecho de Desistimiento</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              Tienes derecho a desistir del contrato en un plazo de 14 días naturales sin necesidad de justificar tu decisión, conforme a la Ley General para la Defensa de los Consumidores y Usuarios.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Condiciones para la Devolución:</h4>
              <ul className="list-disc list-inside text-yellow-700 space-y-1">
                <li>El producto debe estar en su estado original</li>
                <li>Debe incluir todos los accesorios y documentación</li>
                <li>El embalaje original debe estar en buen estado</li>
                <li>Los gastos de devolución corren por cuenta del cliente</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Garantía</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              Todos nuestros productos cuentan con garantía legal de conformidad de 2 años desde la fecha de entrega, además de la garantía comercial específica de cada fabricante.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Cobertura de la Garantía:</h4>
              <ul className="list-disc list-inside text-green-700 space-y-1">
                <li>Defectos de fabricación</li>
                <li>Mal funcionamiento del dispositivo</li>
                <li>Problemas con la batería (según especificaciones)</li>
                <li>Fallos en el sistema GPS</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Responsabilidad</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              BalizaV16.es se compromete a proporcionar productos de calidad y un servicio excelente. Sin embargo, nuestra responsabilidad se limita al valor del producto adquirido.
            </p>
            
            <p>
              No nos hacemos responsables de daños indirectos, lucro cesante o cualquier otro daño que pueda derivarse del uso de nuestros productos.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Resolución de Conflictos</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              Para cualquier controversia que pueda surgir, las partes se someten a la jurisdicción de los Juzgados y Tribunales de Madrid, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
            </p>
            
            <p>
              Antes de acudir a la vía judicial, te recomendamos que contactes con nuestro servicio de atención al cliente para resolver cualquier incidencia.
            </p>
          </div>
        </section>

        <div className="text-center text-sm text-gray-500 border-t pt-6">
          <p>Última actualización: Enero 2024</p>
          <p>Estos términos están sujetos a la legislación española vigente.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;