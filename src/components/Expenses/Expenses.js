import React, {useState} from 'react';
import ExpensesFilter from './Expensefilter';
import ExpenseItem from './Expenseitem';

//import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    
  return (
    <div>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

        {props.items.map((expense)=>(
            <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            /> 
        ))}
    </div>
    
  );
}

export default Expenses;