import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

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

    renderSelectedSite(site) {
        if (site) {
            return (
                <Card>
                    <CardImg width="400" height="500" top src={site.image} alt={site.name} />
                    <CardBody>
                        <CardTitle>{site.name}</CardTitle>
                        <CardText>{site.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

    render() {
        const directory = this.props.sites.map(site => {
            return (
                <div key={site.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onSiteSelect(site)}>
                        <CardImg width="400" height="300"  src={site.image} alt={site.name} />
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
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedSite(this.state.selectedSite)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;