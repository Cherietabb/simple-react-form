import React, { Component } from 'react';
import './App.css';
import ContactUs from './components/contact'
import Header from './components/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          <ContactUs />
        </div>
      </div>
    );
  }
}

export default App;
