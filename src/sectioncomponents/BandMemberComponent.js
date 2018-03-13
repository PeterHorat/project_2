import React, {Component} from 'react';
import './BandMemberComponent.css';
import {Collapse} from 'react-collapse';
import toffee from '../img/toffee_token.jpg';
import PropTypes from 'prop-types';


class BandMemberComponent extends Component {

    static defaultProps = {
        isOpened: false,

    };

    static propTypes = {
        isOpened: PropTypes.bool
    };

    constructor(props, context) {
        super(props, context);
        this.handleIsOpenCollapse = this.handleIsOpenCollapse.bind(this);

        this.state = {
            isOpened: this.props.isOpened
        };
    }


    handleIsOpenCollapse() {
        if (this.state.isOpened === true) {
            this.setState({isOpened: false});
        } else
            this.setState({isOpened: true});
    }

    render() {
        const {isOpened} = this.state;
        return (
            <div>
                <p><strong>{this.props.name}</strong></p><br/>
                <a onClick={this.handleIsOpenCollapse}>
                    <img className='img-circle person' src={toffee} alt="Random Name"/>
                </a>
                <Collapse isOpened={isOpened}>
                    <div className="text-dark">
                        <p>{this.props.bandrole}</p>
                        <p>{this.props.hobby}</p>
                        <p>{this.props.membersince}</p>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default BandMemberComponent;




