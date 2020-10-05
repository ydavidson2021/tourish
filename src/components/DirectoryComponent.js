import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({site}) {
    return (
        <Card>
            <Link to={`/directory/${site.id}`}>
            <CardImg width="400" height="200"  src={site.image} alt={site.name} />
            <CardImgOverlay>
                <CardTitle>{site.name}</CardTitle>
            </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props) {

    const directory = props.sites.map(site => {
        return (
            <div key={site.id} className="col-md-5 m-1">
                <RenderDirectoryItem site={site} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;