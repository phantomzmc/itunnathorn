import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import Background from '../../images/background_image.JPG'
import YouTube from 'react-youtube';


import './header.css'

var profile = "https://scontent.fbkk1-3.fna.fbcdn.net/v/t31.0-8/18404220_1309832765732272_662010694846977645_o.jpg?_nc_cat=0&oh=7681ad3b26b13cf55150c4aefa3396db&oe=5B71B127"
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