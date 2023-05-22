import React, {useState} from 'react';
import ExpensesFilter from './Expensefilter';
import ExpensesList from './Expenseslist';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
}); 



  return (
    <div>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesList items={filteredExpenses}/>
        
    </div>
    
  );
}

export default Expenses;