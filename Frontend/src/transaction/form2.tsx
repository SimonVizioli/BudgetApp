// src/components/Form.tsx
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Input from "./Input";
import axios from "axios";

interface FormData {
    nombre: string;
    cantidad: number;
    categoria: string;
}

const Form: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        nombre: "",
        cantidad: 0,
        categoria: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Maneja el envío del formulario
        await console.log(formData);
    };

    const fetchTransactions = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/transaction"
            );
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching:", error);
        }
    };

    useEffect(() => {
        fetchTransactions();
    }, []);
    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10">
            <Input
                label="Nombre"
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
            />
            <Input
                label="Cantidad"
                type="number"
                name="cantidad"
                value={formData.cantidad}
                onChange={handleChange}
            />
            <Input
                label="Categoría"
                type="text"
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Enviar
            </button>
        </form>
    );
};

export default Form;
