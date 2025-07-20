import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const history = useHistory();

    const { name, email, password, confirmPassword } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            await axios.post('/api/auth/register', { name, email, password });
            history.push('/login');
        } catch (err) {
            setError('Error al registrar el usuario');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
            <form onSubmit={handleSubmit} className="bg-red-600 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl mb-4">Registro</h2>
                {error && <p className="text-red-500">{error}</p>}
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        className="w-full p-2 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className="w-full p-2 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        className="w-full p-2 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="confirmPassword">Confirmar Contraseña</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        className="w-full p-2 rounded"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-white text-black p-2 rounded hover:bg-gray-200">Registrar</button>
            </form>
        </div>
    );
};

export default Register;