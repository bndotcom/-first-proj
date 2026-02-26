import './App.css';

function App() {
  const handleNames = () => {
    const names = ['Creg','Madson','Staiccy','Bobi','Pete'];
      const int = Math.floor(Math.random() * 5);
        return names[int];
  }
  
    
  return (
    <div className="App">
      <header className="App-header">
       <p>
       Hello: {handleNames()}!
        </p>
        
      </header>
    </div>
  );
}

export default App;
