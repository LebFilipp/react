import Message from "./Component/Message";
import './App.css';

function App() {
  const yourName = 'Filipp';
  return (
    <div className="App">
      <Message name={yourName} />
    </div>
  );
}

export default App;
