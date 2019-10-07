import React from 'react';
import logo from './svg/chat.svg';
import './App.css';
import { Navbar } from './main/Navbar';
import { Footer } from './main/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="chat" />
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
