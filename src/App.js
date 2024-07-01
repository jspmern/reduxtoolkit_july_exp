import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todo from './Todo';
import Fetch from './Fetch';

function App() {
  return (
    <div className="App">
        <h1>redux toolkit</h1>
        <Counter/>
        <h6>----------------------------------</h6>
        <Todo/>
        <h6>----------------------</h6>
        <Fetch/>
    </div>
  );
}

export default App;
