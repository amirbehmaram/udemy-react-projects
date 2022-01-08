import React, { useState } from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  {
    id: 'e1',
    title: 'Cat Food',
    amount: 94.12,
    date: new Date(2022, 1, 2),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [ getExpenses, setExpenses ] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses( (prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={ addExpenseHandler } />
      <Expenses expenses={ getExpenses } />
    </div>
  );
}

export default App;
