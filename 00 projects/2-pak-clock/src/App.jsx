import Heading from "./components/heading";
import Textpara from "./components/Textpara";
import Timetext from "./components/TimeText";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <center>
        <Heading />
        <Textpara />
        <Timetext />
      </center>
    </>
  );
}

export default App;
