import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Images from './components/main/images';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <main className='main'>
            <Images />
        </main>
      </div>
    );
  }
}

export default App;
