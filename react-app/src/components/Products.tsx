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
        "Conectado con DGT 3.0"
      ],
      inStock: true,
      popular: true
    },
    {
      id: 2,
      name: "Challux V16 CH-015 Estándar",
      price: 89,
      originalPrice: 109,
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: [
        "Homologada DGT",
        "12 LEDs super brillantes",
        "GPS + NB-IoT networks",
        "Resistencia IP54",
        "Activación 0.4 segundos"
      ],
      inStock: true
    },
    {
      id: 3,
      name: "Challux V16 CH-020L Pro Connect",
      price: 149,
      originalPrice: 189,
      image: "https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: [
        "Certificado DGT oficial",
        "Indicadores LED inteligentes",
        "NB-IoT + SIM card incluida",
        "Conectividad Telefónica Tech",
        "Geolocalización avanzada",
        "App móvil premium"
      ],
      inStock: true
    },
    {
      id: 4,
      name: "Kit Emergencia Challux Completo",
      price: 199,
      originalPrice: 249,
      image: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: [
        "Baliza V16 Challux homologada",
        "Chaleco reflectante incluido",
        "Herramientas de emergencia",
        "Cable USB-C de emergencia",
        "Bolsa de transporte profesional"
      ],
      inStock: true
    }
  ];

  return (
    <section id="productos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Toda la gama de balizas V16 homologadas por la DGT. Encuentra el modelo que mejor se adapte a tus necesidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
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
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              ¿Necesitas ayuda para elegir?
            </h3>
            <p className="text-blue-700 mb-4">
              Nuestro equipo de expertos te ayudará a encontrar la baliza perfecta para tu vehículo.
            </p>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
              Contactar con Expertos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;