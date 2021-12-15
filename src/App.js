import logo from "./logo.svg";
import "./App.css";
import CounterContainer from "./container/CounterContainer";
import ToDoContainer from "./container/TodoContainer";

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <ToDoContainer />
    </div>
  );
}

export default App;
