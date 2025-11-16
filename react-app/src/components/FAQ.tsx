import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué es el certificado IDIADA PC25050254?",
      answer: "Es la certificación oficial emitida por IDIADA Automotive Technology S.A. que garantiza que las balizas Challux V16 cumplen con el Real Decreto 1030/2022. Este certificado es obligatorio para la homologación DGT."
    },
    {
      question: "¿Qué diferencias hay entre los modelos Challux CH-019, CH-015 y CH-020L?",
      answer: "El CH-019 es el modelo premium con certificado IDIADA completo. El CH-015 es la versión estándar con las funciones básicas requeridas. El CH-020L incluye indicadores LED inteligentes y conectividad avanzada NB-IoT."
    },
    {
      question: "¿Qué es la tecnología NB-IoT y Telefónica Tech?",
      answer: "NB-IoT es una tecnología de conectividad que permite que la baliza se comunique con la plataforma DGT 3.0 de Telefónica Tech, enviando automáticamente la ubicación GPS a servicios de emergencia, policía y bomberos."
    },
    {
      question: "¿Funcionan las balizas Challux en condiciones extremas?",
      answer: "Sí, todas las balizas Challux tienen certificación IP54 y funcionan en temperaturas de -10°C a +50°C. Son resistentes al agua, polvo y condiciones climáticas adversas."
    },
    {
      question: "¿Cómo funciona la app móvil de Challux?",
      answer: "La app permite monitorizar el estado de la batería, conexión NB-IoT y GPS. También puedes verificar la ubicación del vehículo y recibir notificaciones del estado de la baliza mediante el código QR o web dgt.challux.com."
    },
    {
      question: "¿Qué incluye el Kit de Emergencia Challux?",
      answer: "Incluye baliza V16 homologada, chaleco reflectante, linterna LED, martillo de seguridad, cables de arranque, compresor de aire, cuerda de remolque, pala plegable y bolsa de transporte profesional."
    },
    {
      question: "¿Qué garantía tienen las balizas Challux?",
      answer: "Todas las balizas Challux incluyen garantía oficial de 2 años contra defectos de fabricación. El certificado IDIADA garantiza el cumplimiento normativo durante toda la vida útil del producto."
    },
    {
      question: "¿Necesito base magnética especial para mi vehículo?",
      answer: "Para vehículos eléctricos con carrocería de aluminio, techos de cristal o descapotables, recomendamos la base magnética de silicona Challux (modelo incluido en catálogo) para una fijación segura."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600">
            Resolvemos todas tus dudas sobre la nueva normativa y las balizas V16.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-900 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-blue-900 flex-shrink-0" size={20} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 border-t border-gray-100">
                  <p className="text-gray-600 pt-4 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-900 text-white rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">¿No encuentras la respuesta que buscas?</h3>
          <p className="mb-6 text-blue-100">
            Nuestro equipo de expertos está disponible para ayudarte con cualquier consulta sobre las balizas V16.
          </p>
          <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Contactar Soporte
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;