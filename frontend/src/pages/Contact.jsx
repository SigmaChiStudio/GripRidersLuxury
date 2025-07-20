import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí se puede agregar la lógica para enviar el formulario
        console.log('Formulario enviado:', formData);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center text-red-600">Contacto</h1>
            <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="message">Mensaje</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        rows="4"
                    />
                </div>
                <button type="submit" className="w-full bg-red-600 text-white font-bold py-2 rounded-md hover:bg-red-700">
                    Enviar Mensaje
                </button>
            </form>
        </div>
    );
};

export default Contact;