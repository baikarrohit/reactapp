import ExpenseDate from './Expensedate';
import './Expenseitem.css';
import './Expensedetails';
import ExpenseDetails from './Expensedetails';

const ExpenseItem = (props) => {
   const clickHandler = () => {
    console.log("Clicked!!!");
   };
   const expenseDeletd = () => {
    console.log("Deleted!");
   };
    return (
        <div className="expense-item"> 
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} expenditure={props.expenditure} amount={props.amount}/>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={expenseDeletd}>Delete Expense</button>
        </div>
        );
}

export default ExpenseItem;

