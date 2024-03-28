import "./App.css";
import Counter from "./components/Counter";
import FormComponent from "./components/FormComponent";
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
        <Counter initialValue={0} />
        <FormComponent />
        <p>v0.3</p>
      </header>
    </div>
  );
}

export default App;
