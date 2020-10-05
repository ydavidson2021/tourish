import React, { Component } from 'react';
import Main from './components/MainComponent';
import { SITES } from './shared/sites';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sites: SITES
    };
}  
  render() {
        return (
          <BrowserRouter>
              <div className="App">
                  <Main />
              </div>
          </BrowserRouter>
        );
    };
}

export default App;