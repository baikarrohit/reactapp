//import ExpenseItem from './components/Expenses/Expenseitem';
import React,{useState} from "react";
import NewExpense from "./components/NewExpenses/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import "./App.css";

let dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.44,
    date: new Date(2023, 4, 14),
  },
  {
    id: "e4",
    title: "New Desk(Wooden)",
    amount: 405,
    date: new Date(2023, 3, 10),
  },
];

const App = () => {
    const [expenses,setExpenses] = useState(dummyExpenses);

    const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
  
  }
  return (
    <div className="App">
      <h2>Lets get started with React!</h2>

      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
      
    </div>
  );
}

export default App;
