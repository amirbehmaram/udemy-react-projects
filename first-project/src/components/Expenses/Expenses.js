import React, { useState } from 'react';

import './Expenses.css';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

function Expenses(props) {
    const expenses = props.expenses;
    const [getFilteredYear, setFilteredYear] = useState('2022');

    const filterSubmitHandler = (year) => {
        setFilteredYear(year);
    };

    return (            
        <Card className="expenses">
            <ExpenseFilter selectedYear={  getFilteredYear } onFilterSubmit={ filterSubmitHandler  } />

            <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            />
            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            />
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            />
            <ExpenseItem
                title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}
            />
        </Card>
    );
}    

export default Expenses;