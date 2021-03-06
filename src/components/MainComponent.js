import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import SiteInfo from './SiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SITES } from '../shared/sites';

import { PARTNERS } from '../shared/partners';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sites: SITES, 
            partners: PARTNERS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        };

        const SiteWithId = ({match}) => {
            return (
                <SiteInfo 
                    site={this.state.sites.filter(site => site.id === +match.params.siteId)[0]}
                    comments={this.state.comments.filter(comment => comment.siteId === +match.params.siteId)}
                />
            );
        };  

        return (
            <div>
                <Header />
                <Switch> 
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory sites={this.state.sites} />} />
                    <Route path='/directory/:siteId' component={SiteWithId} />
                    <Route exact path='/aboutus' render={() => <About partners={this.state.partners} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;