import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import SiteInfo from './SiteInfoComponent';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSite : null
        };
    }

    onSiteSelect(site) {
        this.setState({selectedSite: site});
    }
    
    render() {
        const directory = this.props.sites.map(site => {
            return (
                <div key={site.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onCLick(site.id)}>
                        <CardImg width="400" height="200"  src={site.image} alt={site.name} />
                        <CardImgOverlay>
                            <CardTitle>{site.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;