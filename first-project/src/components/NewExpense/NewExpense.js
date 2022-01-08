import { useState } from "react";

import "./NewExpense.css";

import ExpenseForm from "../ExpenseForm/ExpenseForm";

function NewExpense(props) {
    // Handler for when the form is submitted
    const saveExpenseHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);

        setShowForm(false);
    };

    // When the cancel button in the form is clicked handler
    const cancelClickHandler = () => {
        setShowForm(false);
    }

    // Form Showing State Management
    const [showForm, setShowForm] = useState(false);

    // Show form button handler
    const showFormHandler = (event) => {
        setShowForm(true);
    };

    let content = <button onClick={ showFormHandler }>Add New Expense</button>;

    if (showForm) {
        content = <ExpenseForm showForm={ showForm } onCancelClick={ cancelClickHandler } onExpenseSave={ saveExpenseHandler } />;
    }
  
    return (
        <div className="new-expense">
            { content }
        </div>
    );
}

export default NewExpense;