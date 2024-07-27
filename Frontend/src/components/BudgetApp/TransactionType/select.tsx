import * as React from "react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { TransactionType } from "@/utils/types";

const SelectTransactionType: React.FC = () => {
    const [transactionTypes, setTransactionTypes] =
        React.useState<TransactionType[]>();

    const fetchTransactionTypes = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/transactionType"
            );
            setTransactionTypes(response.data);
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
                <SelectValue placeholder="Select a Transaction Type" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Transaction Type</SelectLabel>
                    {transactionTypes &&
                        transactionTypes.map((type: TransactionType, index) => (
                            <SelectItem
                                key={index}
                                value={JSON.stringify(type.id)}
                            >
                                {type.name}
                            </SelectItem>
                        ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default SelectTransactionType;
