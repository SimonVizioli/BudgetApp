// src/components/Form.tsx
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Input from "../../utils/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface FormData {
    name: string;
    description: string;
    transactionType_id: number;
    transactionCategory_id: number;
    user_id: number;
    amount: number;
    date: string;
    installment: number;
}

const TransactionForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        description: "",
        transactionType_id: 0,
        transactionCategory_id: 0,
        user_id: 0,
        amount: 0,
        date: "",
        installment: 0,
    });
    const navigate = useNavigate();

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
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto my-24  shadow-lg rounded-xl p-6 bg-emerald-200"
        >
            <h2 className="text-xl font-medium text-black py-6">
                Transactions
            </h2>
            <Input
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <Input
                label="Description"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
            />
            <Input
                label="Amount"
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
            />
            <Input
                label="date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
            />
            <div className="inline-flex">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                >
                    Back
                </button>
                <button
                    type="submit"
                    className="bg-green-400 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default TransactionForm;
