import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import FaInstagram from 'react-icons/lib/fa/instagram'

import './about.css'

var profile = "https://scontent.fbkk4-2.fna.fbcdn.net/v/t1.0-9/21557776_1425545897494291_6496115009920700297_n.jpg?_nc_cat=101&_nc_eui2=AeFGHDI-a_pvFL6rF-6J-uFMF72JMsYgal9WNGUUD22Y5QhaeAH6qY2UdVjMHC-yoRrZ42wDgWuiwgsty0z-RVEEhS4hI6geK2mPUrjDiJVb0A&_nc_ht=scontent.fbkk4-2.fna&oh=4397c04897fe041f0d1a80c693a334cf&oe=5CE61AFC"


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