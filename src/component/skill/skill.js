import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import TiVendorAndroid from 'react-icons/lib/ti/vendor-android'
import TiVendorApple from 'react-icons/lib/ti/vendor-apple'
import GoCode from 'react-icons/lib/go/code'
import GoGitBranch from 'react-icons/lib/go/git-branch'

import './skill.css'

class Skills extends Component {

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
                                        <TiVendorAndroid size={50} /> / <TiVendorApple size={50} />
                                        <h2>Mobile Dev</h2>
                                        <p className="cation-skill">
                                            I can make application with iOS/Android by Native IDE (Xcode/Android Studios) or React-Native (Hybits Application)
                                        </p>
                                    </Col>
                                    <Col xs="12" sm="4" md="4">
                                        <GoCode size={50} />
                                        <h2>Language Programing</h2>
                                        <p className="cation-skill">
                                            I can Language Programing by HTML5 , CSS , JavaScript (ES6) , Swift , Java , Json , PHP ,SQL <br />
                                            <b>IoT Skill</b> :  Arduino(C++) , NodeRed
                                        </p>
                                    </Col>
                                    <Col xs="12" sm="4" md="4">
                                        <GoGitBranch size={50} />
                                        <h2>Visual Control</h2>
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

export default Skills;