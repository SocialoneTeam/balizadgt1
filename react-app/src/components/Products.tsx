import React from 'react';
import ProductCard, { Product } from './ProductCard';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
  const products: Product[] = [
    {
      id: 1,
      name: "Challux V16 CH-019 Premium GPS",
      price: 129,
      originalPrice: 159,
      image: "https://images.pexels.com/photos/163792/model-car-land-vehicle-toy-car-163792.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: [
        "Certificado IDIADA PC25050254",
        "12 LEDs super brillantes",
        "GPS + NB-IoT Telefónica Tech",
        "Resistencia IP54 (-10°C a +50°C)",
        "Conectado con DGT 3.0",
        "Batería de larga duración",
        "Activación automática en 0.4s",
        "Garantía de 2 años"
      ],
      inStock: true,
      popular: true
    }
  ];

  return (
    <section id="productos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Baliza V16 Certificada
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            La baliza V16 homologada por la DGT con certificación IDIADA. Cumple con todos los requisitos legales obligatorios desde 2026.
          </p>
        </div>

        <div className="flex justify-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-100 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-2">
              ¿Tienes dudas sobre la baliza V16?
            </h3>
            <p className="text-base md:text-lg text-blue-700 mb-4">
              Nuestro equipo de expertos está disponible para resolver todas tus preguntas sobre la normativa DGT y las características del producto.
            </p>
            <a href="#contacto" className="inline-block bg-blue-900 text-white px-6 py-3 text-base rounded-lg hover:bg-blue-800 transition-colors">
              Contactar con Expertos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;