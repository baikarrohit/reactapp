import React, { useState } from 'react';
import ExpenseDate from './Expensedate';
import './Expenseitem.css';
import './Expensedetails';
import ExpenseDetails from './Expensedetails';


const ExpenseItem = (props) => {
   const [title,setTitle] = useState(props.title);

   const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
   };
   /*const expenseDeleted = () => {
    console.log("Deleted!");
   };*/
   const [expense,setExpense] = useState(props.amount);
   const changeExpense = () => {
    setExpense("100$");
   }
    return (
        <div className="expense-item"> 
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title = {title} expenditure = {props.expenditure} amount={expense}/>
            <button onClick={clickHandler}>Change Title</button>
            {/*<button onClick={expenseDeleted}>Delete Expense</button>*/}
            <button onClick={changeExpense}>Change Expense</button>

        </div>
        );
}

export default ExpenseItem;

