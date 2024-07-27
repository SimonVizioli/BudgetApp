// src/components/Form.tsx
import { Budget } from "@/utils/types";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BudgetForm: React.FC = () => {
    const navigate = useNavigate();
    const [budget, setBudget] = useState<Budget[]>([
        {
            id: 1,
            user_id: 1,
            currentDate: "",
            totalExpenses: 0,
            totalIncome: 0,
            balance: 0,
        },
    ]);

    const fetchBudgets = async () => {
        try {
            const response = await axios.get("http://localhost:3000/budget");
            setBudget(response.data);
        } catch (error) {
            console.error("Error fetching:", error);
        }
    };

    React.useEffect(() => {
        fetchBudgets();
    }, []);

    return (
        <div className="max-w-lg mx-auto my-24  shadow-lg rounded-xl p-6 bg-emerald-200">
            <h2 className="text-xl font-medium text-black py-6">
                Transactions
            </h2>
            <div>
                {budget &&
                    budget.map((budget, index) => (
                        <div key={index}>
                            <div>{budget.currentDate}</div>
                            <div>{budget.totalIncome}</div>
                            <div>{budget.totalExpenses}</div>
                            <div>{budget.balance}</div>
                        </div>
                    ))}
            </div>

            <div className="inline-flex">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default BudgetForm;
