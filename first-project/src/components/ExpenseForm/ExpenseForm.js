import { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
    // Input Field State Management
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const titleChangeHandler = (event) => {

        // Don't do this when depending on previous state as you could be using
        // an older state snapshot.
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.targe.value,           
        // });

        // Passing in a function prevent any usage of stale states
        setUserInput( (prevState) => {
            return {
                ...prevState,
                title: event.target.value
            };
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput( (prevState) => {
            return {
                ...prevState,
                amount: +event.target.value
            };
        });
    };

    const dateChangeHandler = (event) => {
        console.log(event)
        setUserInput( (prevState) => {
            return {
                ...prevState,
                date: new Date(event.target.value)
            };
        });
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        const expenseData = userInput;

        // Prop set in NewExpense.js
        props.onExpenseSave(expenseData);

        setUserInput({
            title: '',
            amount: '',
            date: ''
        });
    };

    const formCancelHandler = (event) => {
        // Even though it's not a type of submit, a button element clicked inside
        // a form wil still fire it, so we need to stop that.
        event.preventDefault();

        // Pass the button click up to our parent which houses the form showing/hiding logic
        props.onCancelClick();
    };

    if (props.showForm) {
        return (
            <form onSubmit={ formSubmissionHandler }>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={ userInput.title } onChange={ titleChangeHandler } />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" value={ userInput.amount } onChange={ amountChangeHandler } />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" value={ userInput.date } onChange={ dateChangeHandler } />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onClick={ formCancelHandler }>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        )
    } else {
        return ('');
    }
}

export default ExpenseForm;