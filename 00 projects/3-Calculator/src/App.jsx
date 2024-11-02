import OutputComponent from "./Components/OutputComponent";
import ButtonsComponent from "./Components/ButtonsComponent";
import "./App.css";

function App() {
  let buttons = [
    "%",
    "CE",
    "C",
    "x",
    "7",
    "8",
    "9",
    "X",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "+/-",
    "0",
    ".",
    "=",
  ];
  return (
    <>
      <div className="main-container">
        <OutputComponent/>
        <ButtonsComponent buttons={buttons}/>
      </div>
    </>
  );
}

export default App;
