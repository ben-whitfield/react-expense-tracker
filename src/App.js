import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Car Insurance", date: new Date(2021, 8, 16), amount: 129.99 },
    { title: "Fun Stuff", date: new Date(2021, 8, 10), amount: 29.99 },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
