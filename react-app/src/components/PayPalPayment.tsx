import React, { useState } from 'react';

interface PayPalPaymentProps {
  amount: number;
  onSuccess: () => void;
  customerInfo: any;
}

const PayPalPayment: React.FC<PayPalPaymentProps> = ({ amount, onSuccess }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayPalPayment = () => {
    setIsProcessing(true);
    
    // Simulate PayPal payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="text-center py-6">
      <div className="mb-4">
        <img 
          src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png" 
          alt="PayPal" 
          className="h-12 mx-auto mb-4"
        />
        <p className="text-gray-600 text-sm">
          Serás redirigido a PayPal para completar tu pago de forma segura
        </p>
      </div>

      <button
        onClick={handlePayPalPayment}
        disabled={isProcessing}
        className={`w-full py-3 rounded-lg font-semibold transition-colors ${
          isProcessing
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-yellow-500 hover:bg-yellow-600 text-white'
        }`}
      >
        {isProcessing ? 'Redirigiendo a PayPal...' : `Pagar €${amount.toFixed(2)} con PayPal`}
      </button>

      <div className="mt-4 text-xs text-gray-500">
        <p>✓ Protección del comprador de PayPal</p>
        <p>✓ No compartimos tu información financiera</p>
      </div>
    </div>
  );
};

export default PayPalPayment;