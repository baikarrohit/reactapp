import ExpenseDate from './Expensedate';
import './Expenseitem.css';
import './Expensedetails';
import ExpenseDetails from './Expensedetails';

const ExpenseItem = (props) => {
   
    return (
        <div className="expense-item"> 
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} expenditure={props.expenditure} amount={props.amount}/>
        </div>
        );
}

export default ExpenseItem;

