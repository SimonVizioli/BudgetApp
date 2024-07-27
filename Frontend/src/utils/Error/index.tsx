import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
    const error = useRouteError();
    console.error(error);

    if (isRouteErrorResponse(error)) {
        return (
            <div className="max-w-lg mx-auto my-24 rounded-xl flex justify-center flex-row items-center">
                <SearchX size={250} strokeWidth={0.75} />
                <div dir="ltr" className="border-s-4 border-teal-500 px-4">
                    <h1 className="text-3xl font-semibold">Oops!</h1>
                    <h2>{error.status}</h2>
                    <p>{error.statusText}</p>
                    {error.data && (
                        <p className="text-3xl font-semibold">{error.data}</p>
                    )}
                </div>
                <Button>
                    <Link to={""}>Home</Link>
                </Button>
            </div>
        );
    } else {
        return (
            <div className="max-w-lg mx-auto my-24 rounded-xl flex justify-center flex-row items-center">
                Oops
            </div>
        );
    }
};

export default ErrorPage;
