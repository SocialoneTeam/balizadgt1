import React, { useState } from 'react';
import { CreditCard, Lock } from 'lucide-react';

interface StripePaymentProps {
  amount: number;
  onSuccess: () => void;
  customerInfo: any;
}

const StripePayment: React.FC<StripePaymentProps> = ({ amount, onSuccess, customerInfo }) => {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const name = e.target.name;

    // Format card number
    if (name === 'cardNumber') {
      value = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      if (value.length > 19) value = value.substring(0, 19);
    }

    // Format expiry date
    if (name === 'expiryDate') {
      value = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
      if (value.length > 5) value = value.substring(0, 5);
    }

    // Format CVV
    if (name === 'cvv') {
      value = value.replace(/\D/g, '');
      if (value.length > 3) value = value.substring(0, 3);
    }

    setCardInfo({
      ...cardInfo,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-2 text-green-600 mb-4">
        <Lock size={16} />
        <span className="text-sm">Pago seguro con cifrado SSL</span>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nombre en la tarjeta *
        </label>
        <input
          type="text"
          name="cardName"
          required
          value={cardInfo.cardName}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Juan Pérez"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Número de tarjeta *
        </label>
        <div className="relative">
          <input
            type="text"
            name="cardNumber"
            required
            value={cardInfo.cardNumber}
            onChange={handleInputChange}
            className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="1234 5678 9012 3456"
          />
          <CreditCard className="absolute left-3 top-2.5 text-gray-400" size={16} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fecha de vencimiento *
          </label>
          <input
            type="text"
            name="expiryDate"
            required
            value={cardInfo.expiryDate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="MM/AA"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CVV *
          </label>
          <input
            type="text"
            name="cvv"
            required
            value={cardInfo.cvv}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="123"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isProcessing}
        className={`w-full py-3 rounded-lg font-semibold transition-colors ${
          isProcessing
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-900 hover:bg-blue-800 text-white'
        }`}
      >
        {isProcessing ? 'Procesando...' : `Pagar €${amount.toFixed(2)}`}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Al completar tu pedido, aceptas nuestros términos y condiciones
      </p>
    </form>
  );
};

export default StripePayment;