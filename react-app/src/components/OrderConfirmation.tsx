import React from 'react';
import { CheckCircle, Package, Truck, Mail, Phone } from 'lucide-react';

interface OrderConfirmationProps {
  orderNumber: string;
  onContinueShopping: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ orderNumber, onContinueShopping }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-center">
      <div className="mb-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">¡Pedido Confirmado!</h1>
        <p className="text-gray-600">
          Gracias por tu compra. Tu pedido ha sido procesado correctamente.
        </p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-green-800 mb-2">
          Número de pedido: #{orderNumber}
        </h2>
        <p className="text-green-700 text-sm">
          Hemos enviado un email de confirmación con todos los detalles de tu pedido.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="text-center">
          <Package className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <h3 className="font-semibold mb-1">Preparación</h3>
          <p className="text-sm text-gray-600">24-48 horas</p>
        </div>
        <div className="text-center">
          <Truck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <h3 className="font-semibold mb-1">Envío</h3>
          <p className="text-sm text-gray-600">2-3 días laborables</p>
        </div>
        <div className="text-center">
          <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <h3 className="font-semibold mb-1">Entrega</h3>
          <p className="text-sm text-gray-600">En tu domicilio</p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-blue-800 mb-3">¿Necesitas ayuda?</h3>
        <div className="flex justify-center space-x-6 text-sm">
          <div className="flex items-center space-x-2 text-blue-700">
            <Mail size={16} />
            <span>info@balizav16.es</span>
          </div>
          <div className="flex items-center space-x-2 text-blue-700">
            <Phone size={16} />
            <span>900 123 456</span>
          </div>
        </div>
      </div>

      <button
        onClick={onContinueShopping}
        className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
      >
        Continuar Comprando
      </button>
    </div>
  );
};

export default OrderConfirmation;