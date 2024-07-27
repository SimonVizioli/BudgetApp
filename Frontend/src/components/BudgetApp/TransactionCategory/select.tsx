import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { TransactionCategory } from "@/utils/types";
import axios from "axios";
import React from "react";

const SelectTransactionCategory = () => {
    const [transactionCategorys, setTransactionCategory] =
        React.useState<TransactionCategory[]>();

    const fetchTransactionTypes = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/transactionCategory"
            );
            setTransactionCategory(response.data);
        } catch (error) {
            console.error("Error fetching:", error);
        }
    };

    React.useEffect(() => {
        fetchTransactionTypes();
    }, []);
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Transaction Category" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Transaction Category</SelectLabel>
                    {transactionCategorys &&
                        transactionCategorys.map(
                            (type: TransactionCategory, index) => (
                                <SelectItem
                                    key={index}
                                    value={JSON.stringify(type.id)}
                                >
                                    {type.name}
                                </SelectItem>
                            )
                        )}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default SelectTransactionCategory;
