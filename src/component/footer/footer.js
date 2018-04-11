import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaYoutubePlay from 'react-icons/lib/fa/youtube-play'
import GoMarkGithub from 'react-icons/lib/go/mark-github'

import './footer.css'
class Footer extends Component {

    render() {
        return (
            <div className="footer-bottom">
                <Container>
                    <Row>
                        <Col xs="12" sm="6" md="6">
                            <div className="copyright-text">
                                <p>CopyRight © 2018 Thunnathorn Yuvasin</p>
                            </div>
                        </Col>
                        <Col xs="12" sm-="6" md="6">
                            <ul class="social-link pull-right">
                                <li><a href=""><FaFacebookSquare size={30}/></a></li>
                                <li><a href=""><FaInstagram size={30}/></a></li>
                                <li><a href=""><FaYoutubePlay size={30}/></a></li>
                                <li><a href=""><GoMarkGithub size={30}/></a></li>

                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;