import "./App.css";

function App() {
  // let foodItems = ["Item1", "Item2", "Item3", "Item5", "Item6", "Item7"];
  let foodItems = [];
  return (
    <>
      <h1>Food Items</h1>
      {foodItems.length==0 ? "No foodItem Found":null}
      <ul>
        {foodItems.map(function (item) {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
