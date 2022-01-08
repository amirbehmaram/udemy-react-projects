import React, { useState } from 'react';

import './Expenses.css';

import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [getFilteredYear, setFilteredYear] = useState('2022');

    const filterSubmitHandler = (year) => {
        setFilteredYear(year);
    };
    
    console.log(props.expenses)
    const filteredExpenses = props.expenses.filter( expense => expense.date.getFullYear().toString() === getFilteredYear);
    
    return (            
        <Card className="expenses">
            <ExpenseFilter selectedYear={  getFilteredYear } onFilterSubmit={ filterSubmitHandler  } />
            <ExpensesChart expenses={ filteredExpenses } />
            <ExpensesList filteredExpenses={ filteredExpenses } />
        </Card>
    );
}    

export default Expenses;