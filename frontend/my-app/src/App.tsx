import React from 'react';
import logo from './logo.svg';
import ReviewPage from './pages/reviewPage/review';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReviewPage id={10} title={"Porter Robinson - Nurture"}/>
      </header>
    </div>
  );
}

export default App;
