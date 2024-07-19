import "./App.css";
import TransactionForm from "./transaction/form";
import SelectTransactionCategory from "./transactionCategory/select";
import SelectTransactionType from "./transactionType/select";

function App() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Budget App!</h1>
            <SelectTransactionType />
            <SelectTransactionCategory />
            <TransactionForm />
        </>
    );
}

export default App;
