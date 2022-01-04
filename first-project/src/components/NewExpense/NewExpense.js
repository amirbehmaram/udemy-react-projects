import "./NewExpense.css";

import ExpenseForm from "../ExpenseForm/ExpenseForm";

function NewExpense(props) {
    const saveExpenseHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };
  
    return (
        <div className="new-expense">
            <ExpenseForm onExpenseSave={ saveExpenseHandler } />
        </div>
    );
}

export default NewExpense;