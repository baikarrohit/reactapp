//import ExpenseItem from './components/Expenses/Expenseitem';
import NewExpense from "./components/NewExpenses/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import "./App.css";

const App = (props) => {
  

  const addExpenseHandler = (expense) => {
    const ExpenseData = {
      ...expense,
      id:Math.random().toString()
    };
    console.log(ExpenseData);
  }
  return (
    <div className="App">
      <h2>Lets get started with React!</h2>

      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses />
      
    </div>
  );
}

export default App;
