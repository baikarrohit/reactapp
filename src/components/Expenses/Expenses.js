import React, {useState} from 'react';
import ExpensesFilter from './Expensefilter';
import ExpenseItem from './Expenseitem';

//import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    let expenses = [
        {
          id: "e1",
          title: "Toilet Paper",
          LocationOfExpenditure: 'Home',
          amount: 94.12,
          date: new Date(2022, 7, 14),
        },
        {
          id: "e2",
          title: "New TV",
          LocationOfExpenditure: 'Home',
          amount: 799.49,
          date: new Date(2022, 2, 12),
        },
        {
          id: "e3",
          title: "Car Insurance",
          LocationOfExpenditure: 'Car',
          amount: 294.44,
          date: new Date(2023, 4, 14),
        },
        {
          id: "e4",
          title: "New Desk(Wooden)",
          LocationOfExpenditure: 'Home',
          amount: 405,
          date: new Date(2023, 3, 10),
        },
      ];

  return (
    <div>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

        {expenses.map((ele)=>{
        return (
            <div key={ele.title}> 
                <ExpenseItem 
                    title={ele.title}
                    expenditure={ele.LocationOfExpenditure}
                    amount={ele.amount}
                    date={ele.date}
                /> 
            </div>)
        
        })}
    </div>
    
  );
}

export default Expenses;