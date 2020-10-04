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
                <Navbar dark color="secondary">
                <div className="container">
                    <NavbarBrand href="/">Tourish</NavbarBrand>
                </div>
                </Navbar>
                <Directory sites={this.state.sites} />
            </div>
        );
    }
}

export default App;