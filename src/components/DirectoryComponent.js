import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({site, onClick}) {
    return (
        <Card onClick={() => onClick(site.id)}>
            <CardImg width="400" height="200"  src={site.image} alt={site.name} />
            <CardImgOverlay>
                <CardTitle>{site.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Directory(props) {

    const directory = props.sites.map(site => {
        return (
            <div key={site.id} className="col-md-5 m-1">
                <RenderDirectoryItem site={site} onClick={props.onClick} />
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

export default Directory;