import React, {Component} from 'react';
import poem1 from '../img/poem_1.jpg';

class SturmTagsBook extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '@tylermcginnis33',
            name: 'Tyler McGinnis',
            friends: [
                'Jake Lingwall',
                'Murphy Randall',
                'Merrick Christensen'
            ],
            emails: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.addFriend = this.addFriend.bind(this);
    };

    handleChange(e) {
        this.setState({
            username: e.target.value
        });
    };

    addFriend(friend) {
        this.setState({
            friends: this.state.friends.concat([friend])
        });
    }

    render() {
        return (
            <div id="sturmtags" className="flex-container">

                <article>
                    <img className="img-responsive" src={poem1} alt={"storm-tags"}/>
                    <br/>
                </article>

            </div>
        );
    }
}

export default SturmTagsBook;
