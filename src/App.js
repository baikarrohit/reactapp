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

      {expenses.map((ele)=>{
        return <div key={ele.title}> 
          <ExpenseItem 
            title={ele.title}
            expenditure={ele.LocationOfExpenditure}
            amount={ele.amount}
            date={ele.date}
          /> 
        </div>
        
      })}
      
    </div>
  );
}

export default App;
