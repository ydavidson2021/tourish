import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import SiteInfo from './SiteInfoComponent';
import { SITES } from '../shared/sites';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sites: SITES,
            selectedSite: null
        };
    }

    onSiteSelect(siteId) {
        this.setState({selectedSite: siteId});
    }

    render() {
        return (
            <div>
                <Navbar dark color="secondary">
                    <div className="container">
                        <NavbarBrand href="/">Tourish</NavbarBrand>
                    </div>
                </Navbar>
                <Directory sites={this.state.sites} onClick={siteId => this.onSiteSelect(siteId)}/>
                <SiteInfo site={this.state.sites.filter(site => site.id === this.state.selectedSite)[0]} />
            </div>
        );
    };
}

export default Main;