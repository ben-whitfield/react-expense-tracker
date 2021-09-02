import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { title: "Car Insurance", date: new Date(2021, 8, 16), amount: 129.99 },
    { title: "Fun Stuff", date: new Date(2021, 8, 10), amount: 29.99 },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
