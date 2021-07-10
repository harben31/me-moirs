import React, { Component } from 'react';

class Likes extends Component {
    state = {
        likes: 0
    };

    addLike = () => {
        let newCount = this.state.likes + 1;
        this.setState({
            likes: newCount
        });
    };

    render() {
        return (
            <span>
                <span class="likes material-icons" onClick={this.addLike}>
                    favorite
                </span>
                <span>{this.state.likes}</span>
            </span>
        )
    }
};

export default Likes;