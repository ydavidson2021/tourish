import React, { Component } from 'react'; 
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class SiteInfo extends Component {
    constructor(props){
        super(props);
    }

    renderSite(site){
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg width="400" height="200" top src={site.image} alt={site.name} />
                    <CardBody>
                        <CardTitle>{site.name}</CardTitle>
                        <CardText>{site.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments){
        if(comments){
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => {
                        return(<div><p>
                            {comment.text}
                            <br/>
                            -- {comment.author}, 
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </p></div>)
                    })}
                </div>
            );
        }
    }
    render() {
        if (this.props.site) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderCampsite(this.props.site)}
                        {this.renderComments(this.props.site.comments)}
                    </div>
                </div>
            );
        }
        return <div />;
    }
}

export default SiteInfo; 