import React from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: "¿Qué tipos de productos ofrecen?",
            answer: "Ofrecemos una variedad de productos de belleza para motos, artículos de mantenimiento y accesorios de lujo."
        },
        {
            question: "¿Cómo puedo realizar un pedido?",
            answer: "Puedes navegar por nuestro catálogo, agregar productos al carrito y proceder al pago utilizando uno de nuestros métodos de pago."
        },
        {
            question: "¿Cuáles son los métodos de pago disponibles?",
            answer: "Aceptamos pagos a través de PSE, tarjetas de crédito/débito y pago contra entrega."
        },
        {
            question: "¿Hacen envíos a todo Colombia?",
            answer: "Sí, realizamos envíos a todas las ciudades de Colombia."
        },
        {
            question: "¿Puedo devolver un producto?",
            answer: "Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra, siempre que el producto esté en su estado original."
        }
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Preguntas Frecuentes</h1>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b pb-4">
                        <h2 className="text-xl font-semibold">{faq.question}</h2>
                        <p className="text-gray-700">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;