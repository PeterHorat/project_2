import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './Video.css';


class Video extends Component {

    render() {
        return (
            <div id="video" className="video_container container">
                <div className="player-wrapper">
                    <ReactPlayer className='react-player'
                                 url='https://www.dropbox.com/s/3ughs6fzfrjqvoy/Video%2007.05.18%2C%2017%2057%2025.mp4?dl=0'
                                 width='100%'
                                 height='100%'
                                 playing/>
                </div>
            </div>
        )
    }
}

export default Video;




