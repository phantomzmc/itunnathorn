import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import Background from '../../images/background_image.JPG'
import YouTube from 'react-youtube';


import './header.css'

var profile = "https://www.facebook.com/photo.php?fbid=2365586546823550&set=a.124523280929899&type=3&theater"
var video = "http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
var sectionStyle = {
    width: "100%",
    height: "400px",
}
class Header extends Component {
    render() {
        const opts = {
            playerVars: {
                autoplay: 1,
                start: 0,
                loop: 1,
                playlist: "Yc3KwxUN-QI",
                mute: 1
            },
        };
        return (
            <div className="imgHead">
                <div className="video-background">
                    <div className="video-foreground">
                        <YouTube
                            videoId="Yc3KwxUN-QI"
                            opts={opts}
                            className="video-iframe"
                            onReady={this._onReady}
                        />
                    </div>
                </div>
            </div>
        );
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
    }
}

export default Header;