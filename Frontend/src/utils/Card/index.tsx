"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
} from "@/components/ui/card";
import { ReactNode } from "react";
import AuthHeader from "./auth-header";
import BackButton from "./back-button";
interface CardWrapperProps {
    label: string;
    title: string;
    backButtonHref: string;
    backButtonLabel: string;
    children: ReactNode;
}
const CardWrapper = ({
    label,
    title,
    backButtonHref,
    backButtonLabel,
    children,
}: CardWrapperProps) => {
    return (
        <Card className="xl:w-1/4 md:w-1/2 shadow-md max-w-lg mx-auto my-24 shadow-lg rounded-xl">
            <CardHeader>
                <AuthHeader label={label} title={title} />
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref} />
            </CardFooter>
        </Card>
    );
};
export default CardWrapper;
