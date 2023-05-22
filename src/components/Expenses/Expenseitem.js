import React from 'react';
import ExpenseDate from './Expensedate';
import './Expenseitem.css';
import ExpenseDetails from './Expensedetails';


const ExpenseItem = (props) => {
   
    return (
        <li>
            <div className="expense-item"> 
                <ExpenseDate date={props.date}/>
                <ExpenseDetails title = {props.title} amount={props.amount}/>
            </div>
        </li>
    );
}

export default ExpenseItem;

