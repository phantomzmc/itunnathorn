import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
// import { GoDeviceMobile } from "react-icons/go";

import './porfolio.css'

class Porfolio extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="12">
                        <div className="boxSkill">
                            <h1 className="skills">Skills : ⚒</h1>
                            <div className="gridImg">
                                <Row>
                                    <Col xs="12" sm="4" md="4">
                                        {/* <GoDeviceMobile size={50} /> */}
                                        <h2>Mobile Application</h2>
                                        <p className="cation-skill">
                                            I can make application with iOS/Android by Native IDE (Xcode/Android Studios) or React-Native (Hybits Application)
                                    </p>
                                    </Col>
                                    <Col xs="12" sm="4" md="4">
                                        <h2>Web Application</h2>
                                        <p className="cation-skill">
                                            I can Language Programing by HTML5 , CSS , JavaScript (ES6) , Swift , Java , Json , PHP ,SQL <br />
                                            <b>IoT Skill</b> :  Arduino(C++) , NodeRed
                                    </p>
                                    </Col>
                                    <Col xs="12" sm="4" md="4">
                                        <h2>Internet of Think</h2>
                                        <p className="cation-skill">
                                            Can work through Github/GitLab by Commandline or SouceTree
                                    </p>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Porfolio;