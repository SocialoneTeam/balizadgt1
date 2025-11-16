import React from 'react';
import { ShoppingCart, Shield, Battery, Smartphone } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  features: string[];
  inStock: boolean;
  popular?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden relative">
      {product.popular && (
        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
          MÁS VENDIDO
        </div>
      )}
      
      {discount > 0 && (
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
          -{discount}%
        </div>
      )}

      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-blue-900">€{product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">€{product.originalPrice}</span>
            )}
          </div>
          
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            product.inStock 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {product.inStock ? 'En Stock' : 'Agotado'}
          </div>
        </div>

        <div className="space-y-2 mb-6">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
              {feature.includes('Homologada') && <Shield size={16} className="text-green-600" />}
              {feature.includes('Batería') && <Battery size={16} className="text-blue-600" />}
              {feature.includes('App') && <Smartphone size={16} className="text-purple-600" />}
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
            product.inStock
              ? 'bg-blue-900 hover:bg-blue-800 text-white transform hover:scale-105'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart size={20} />
          <span>{product.inStock ? 'Añadir al Carrito' : 'Sin Stock'}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;