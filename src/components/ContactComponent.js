import React from 'react';

function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Contact Us</h2>
                    <hr />
                </div>
            </div>

            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h5>Our Address</h5>
                    <address>
                        1123 Seven Eight<br />
                        San Antonio, TX 78215<br />
                        U.S.A.
                    </address>
                </div>
                <div className="col">
                    <a role="button" className="btn btn-link" href="tel:+12101234567"><i className="fa fa-phone" /> 1-210-123-4567</a><br />
                    <a role="button" className="btn btn-link" href="mailto:virtualtour@tour.co"><i className="fa fa-envelope-o" /> virtualtour@tour.co</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;