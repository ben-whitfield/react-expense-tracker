import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {title: 'Car Insurance', date: new Date(2021, 8, 16), amount: 129.99},
    {title: 'Fun Stuff', date: new Date(2021, 8, 10), amount: 29.99}
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount} />
      <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount} />
    </div>
  );
}

export default App;
