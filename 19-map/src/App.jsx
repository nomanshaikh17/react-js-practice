import "./App.css";

function App() {
  let itemArr = ["item1", "item2", "item3", "item4", "item5", "item6"];
  return (
    <>
      <h1>map</h1>
      <ul>
        {itemArr.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
