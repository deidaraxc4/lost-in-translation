import React from 'react';
import './App.css';
import { Navbar } from './main/Navbar';
import { Footer } from './main/Footer';
import { HomePage } from './main/HomePage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
