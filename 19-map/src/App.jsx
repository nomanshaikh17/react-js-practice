import "./App.css";

function App() {
  // let itemArr = ["item1", "item2", "item3", "item4", "item5", "item6"];
  let itemArr = [];
  return (
    <>
      <h1>map</h1>
      {itemArr.length==0 ? 'item not found' : null}
      <ul>
        {itemArr.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
