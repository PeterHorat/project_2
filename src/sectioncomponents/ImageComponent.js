import React, {Component} from 'react';
import './ImageComponent.css';
import poem1 from '../img/poem_1.jpg';


class ImageComponent extends Component {

    constructor(props, context) {
        super(props, context);
    }


    render() {

        return (
            <div>
                <p><strong>Image</strong></p><br/>
                    <img className="img-responsive" src={poem1} alt={"storm-tags"}/>
            </div>
        )
    }
}

export default ImageComponent;




