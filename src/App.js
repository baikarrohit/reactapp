import ExpenseItem from "./components/Expenseitem";

import "./App.css";

function App() {
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
    <div className="App">
      <h2>Lets get started with React!</h2>
      <ExpenseItem
        title={expenses[0].title}
        expenditure={expenses[0].LocationOfExpenditure}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        expenditure={expenses[1].LocationOfExpenditure}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        expenditure={expenses[2].LocationOfExpenditure}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        expenditure={expenses[3].LocationOfExpenditure}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>      
     
    
    </div>
  );
}

export default App;
