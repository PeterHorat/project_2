import React, {Component} from 'react';
import '../App.css';

class FooterComponent extends Component {

    constructor(props, context) {
        super(props, context);
    }


    render() {
        return (
            <div className='container'>
                <footer className="text-center">
                    <a class="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
                        <span class="glyphicon glyphicon-chevron-up"></span>
                    </a><br/><br/>
                    <p>Bootstrap Theme Made By <a href="https://www.w3schools.com" data-toggle="tooltip"
                                                  title="Visit w3schools">www.w3schools.com</a></p>
                </footer>
            </div>
        )
    }
}

export default FooterComponent;




