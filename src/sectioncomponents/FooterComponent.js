import React, {Component} from 'react';
import './FooterComponent.css';

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
                    <p>DGSW Sleeping Dog<a href="https://www.w3schools.com" data-toggle="tooltip"
                                                  title="Visit our Homepage "> sleepingdogpeterhorat.com </a></p>
                </footer>
            </div>
        )
    }
}

export default FooterComponent;




