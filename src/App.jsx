
import "./App.css";
import Lottery from "./Lottery.jsx";

function App() {
  return (
    <div >
      <h1>Lottery Game</h1>
      <Lottery n={5} winningSum={15} />
    </div>
  );
}

export default App;
