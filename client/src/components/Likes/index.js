import React, { Component } from 'react';

class Likes extends Component {
    state = {
        likes: 0,
        liked: false
    };

    addLike = () => {
        if(!this.state.liked) {
            this.setState({
                liked: true
            });
            let newCount = this.state.likes + 1;
            this.setState({
                likes: newCount
            });
        } else {
            this.setState({
                liked: false
            });
            let newCount = this.state.likes - 1;
            this.setState({
                likes: newCount
            }); 
        }
        
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