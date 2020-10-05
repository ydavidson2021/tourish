import React from 'react'; 
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderSite({site}){
    return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top width="400" height="200" top src={site.image} alt={site.name} />
                <CardBody>
                    <CardTitle>{site.name}</CardTitle>
                    <CardText>{site.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments ({comments}){
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
function SiteInfo (props) {
    if (props.site) {
        return (
            <div className="container">
                <div className="row">
                    <RenderSite campsite={props.site} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default SiteInfo; 