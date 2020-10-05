import React from 'react';
import { Card, CardGroup, CardText, CardBody, Button} from 'reactstrap';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { UncontrolledCarousel } from 'reactstrap';
import Comment from './CommentComponent';



const items = [
    {
    src:"./assets/images/louvre.jpg",                   
    altText: 'Louvre',
    caption: <Link to='/directory/1' className="white-text" >Louvre</Link>,
    header: 'Louvre',
    key: '0'
    },
    {
    src: './assets/images/britmuseum.jpg',
    altText: 'British Museum',
    caption: <Link to='/directory/0' className="white-text" >British Museum</Link>,
    header: 'British Museum',
    key: '1'
    },
    {
    src: './assets/images/yellowstone.jpg',   
    altText: 'Yellow Stone',
    caption: <Link to='/directory/8' className="white-text"> Yellow Stone</Link>,
    header: 'Yellow Stone',
    key: '2'
    }
];


function RenderCard({item}) {
    return (
        <Card>
            <CardBody>
                <CardText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. - Happy Customer </CardText>
            </CardBody>
        </Card>
    );
}


function Home(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md m-1">
                    <h1 align-self="center"> Bored?</h1>
                    <h2> Enjoy these virtual tours at the comfort of your couch!</h2>
                    <br></br>
                    <Media className="tours" src="./assets/images/yosemite.jpg" fluid width="400" height="400" className="rounded mx-auto d-block"/>
                </div>
            </div>
            <br></br>
            <div className="row features">
                <div className="col">
                    <center>
                        <i className="fa fa-map-marker fa-4x" />
                    </center>
                    <h3>Convenient</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col">
                    <center>
                        <i className="fa fa-money fa-4x" />
                    </center>                   
                    <h3>Free</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col">
                    <center>
                        <i className="fa fa-smile-o fa-4x" />
                    </center>   
                    <h3>Safe</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md m-1">
                    <h1> Featured Sites</h1>
                    <Button color="info" tag={Link}to="/directory" size="lg"> Directory </Button>{' '}
                </div>
            </div>
            <br></br>
            <div className="row center-carousel">
                <UncontrolledCarousel items={items} />               
            </div>
            <br></br>
            <div className="row comment"> 
                <h2 className="text-light">Suggestions or Comments? We'd love to hear from you.</h2>
                <Comment />
            </div>
            <div className="row">
                <div className="col">
                    <h1>Testimonials </h1>
                    <CardGroup>
                        <RenderCard />
                        <RenderCard />
                        <RenderCard />
                    </CardGroup>
                </div>
            </div>
        </div>
    );
}

export default Home; 