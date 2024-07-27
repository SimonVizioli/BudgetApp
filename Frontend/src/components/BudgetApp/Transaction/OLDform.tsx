// src/components/Form.tsx
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../utils/Input";
import SelectTransactionCategory from "../TransactionCategory/select";
import SelectTransactionType from "../TransactionType/select";
import { Transaction } from "@/utils/types";
import { Button } from "@/components/ui/button";

const TransactionForm: React.FC = () => {
    const [formData, setFormData] = useState<Transaction>({
        name: "",
        description: "",
        transactionType_id: 1,
        transactionCategory_id: 1,
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

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto my-24  shadow-lg rounded-xl p-6 bg-emerald-200"
        >
            <h2 className="text-xl font-medium text-black py-6">
                Transactions
            </h2>
            <div className="flex space-x-1">
                <Input
                    label="Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <Input
                    label="Date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />
            </div>
            <Input
                label="Description"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
            />
            <div className="flex space-x-1">
                <SelectTransactionCategory />
                <SelectTransactionType />
            </div>
            <div className="flex space-x-1">
                <Input
                    label="Amount"
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                />
                <Input
                    label="Installment"
                    type="number"
                    name="installment"
                    value={formData.installment}
                    onChange={handleChange}
                />
            </div>

            <div className="inline-flex">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                >
                    Back
                </button>
                <button type="submit">Submit</button>
                <Button
                    type="submit"
                    className="bg-green-400 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                >
                    Add
                </Button>
            </div>
        </form>
    );
};

export default TransactionForm;
