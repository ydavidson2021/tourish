import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import SiteInfo from './SiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
                <Header />
                <Directory sites={this.state.sites} onClick={siteId => this.onSiteSelect(siteId)}/>
                <SiteInfo site={this.state.sites.filter(site => site.id === this.state.selectedSite)[0]} />
                <Footer />
            </div>
        );
    };
}

export default Main;