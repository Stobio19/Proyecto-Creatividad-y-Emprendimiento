import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">asdasd</header>
      <main className="App-body">
        <div className="div-main-form">
        <div className="div-main-form-content">
        <h2>Enter Your Data!</h2>
          <form className="main-form">
            <label>Enter your phrase!</label>        
            <input placeholder="Phrase" required></input>    
            <label>Number greater than 10</label>        
            <input placeholder="Number..." required></input>   
            <button type="submit">Send</button>         
          </form>
        </div>
        </div>
      </main>
      <footer className="App-footer">asdasdasdasd</footer>
    </div>
  );
}

export default App;
