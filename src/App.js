import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import { SITES } from './shared/sites';
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
            <div className="App">
                <Main />
            </div>
        );
    }
}

export default App;