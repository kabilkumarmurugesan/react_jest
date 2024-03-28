import "./App.css";
import Counter from "./components/Counter";
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
        <Counter initialValue={0} />
        <p>v0.2</p>
      </header>
    </div>
  );
}

export default App;
