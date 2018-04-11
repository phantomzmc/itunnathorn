import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import FaInstagram from 'react-icons/lib/fa/instagram'

import './about.css'

var profile = "https://scontent.fbkk1-3.fna.fbcdn.net/v/t31.0-8/18404220_1309832765732272_662010694846977645_o.jpg?_nc_cat=0&oh=7681ad3b26b13cf55150c4aefa3396db&oe=5B71B127"


class About extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="12" className="col">
                        <div className="hello">
                            <img src={profile} className="profile" />
                            <div className="content">
                                <h1 className="title">I'm Thunnathorn 🤪</h1>
                                <h3><FaInstagram /> : @sirkiiky</h3>
                                <p className="detail">
                                    I'm Font-End Developer @ibits. I have skills <b>ReactJS</b>/Mobile Dev (iOS/Android).
    Graduated from The Far Easther University faculty as Information Science and Technology. finished project is Elderly Application for iOS
                            </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default About;