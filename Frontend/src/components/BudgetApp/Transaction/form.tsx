"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { TransactionSchema } from "@/utils/Schema";
import { TransactionCategory, TransactionType } from "@/utils/types";
import axios from "axios";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React from "react";

const TransactionForm = () => {
    const [transactionTypes, setTransactionTypes] =
        React.useState<TransactionType[]>();
    const [transactionCategorys, setTransactionCategory] =
        React.useState<TransactionCategory[]>();

    const fetchTransaction = async () => {
        try {
            const response1 = await axios.get(
                "http://localhost:3000/transactionCategory"
            );
            setTransactionCategory(response1.data);
            const response = await axios.get(
                "http://localhost:3000/transactionType"
            );
            setTransactionTypes(response.data);
        } catch (error) {
            console.error("Error fetching:", error);
        }
    };

    React.useEffect(() => {
        fetchTransaction();
    }, []);
    const form = useForm({
        resolver: zodResolver(TransactionSchema),
        defaultValues: {
            name: "",
            description: "",
            transactionType_id: "",
            transactionCategory_id: "",
            user_id: 1,
            amount: 1,
            date: new Date(),
            installment: 1,
        },
    });

    function onSubmit(data: z.infer<typeof TransactionSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
            ),
        });
    }

    return (
        <div className="w-1/2 mx-auto my-24 flex justify-center shadow-lg rounded-xl p-6 bg-emerald-700 ">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex justify-center space-x-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="flex flex-col w-full">
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Name"
                                            {...field}
                                            type="string"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Date</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[240px] pl-3 text-left font-normal",
                                                        !field.value &&
                                                            "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(
                                                            field.value,
                                                            "PPP"
                                                        )
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent
                                            className="w-auto p-0"
                                            align="start"
                                        >
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date > new Date() ||
                                                    date <
                                                        new Date("1900-01-01")
                                                }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Description"
                                        {...field}
                                        type="string"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-center space-x-4 ">
                        <FormField
                            control={form.control}
                            name="transactionType_id"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Type</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Select a Transaction Type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        {transactionTypes &&
                                            transactionTypes.map(
                                                (
                                                    type: TransactionType,
                                                    index
                                                ) => (
                                                    <SelectItem
                                                        key={index}
                                                        value={JSON.stringify(
                                                            type.id
                                                        )}
                                                    >
                                                        {type.name}
                                                    </SelectItem>
                                                )
                                            )}
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="transactionCategory_id"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Type</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Select a Transaction Type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        {transactionCategorys &&
                                            transactionCategorys.map(
                                                (
                                                    type: TransactionCategory,
                                                    index
                                                ) => (
                                                    <SelectItem
                                                        key={index}
                                                        value={JSON.stringify(
                                                            type.id
                                                        )}
                                                    >
                                                        {type.name}
                                                    </SelectItem>
                                                )
                                            )}
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="amount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Amount</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Amount"
                                            {...field}
                                            type="number"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="installment"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Installment</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Installment"
                                            {...field}
                                            type="number"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit" className="my-2">
                        Add
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default TransactionForm;
