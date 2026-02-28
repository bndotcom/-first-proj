import './App.css';

function App() {
  const handleNameChange = () => {
      const names = ['Pete', 'Anderson','Creg','Jameson'];
      const int = Math.floor(Math.random() * 4);
      return names[int];
  }
    
  return (
    <div className="App">
      <header className="App-header">
      <p></p>
        Hello: {handleNameChange()}
      </header>
    </div>
  );
}

export default App;
