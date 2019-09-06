import React, {Component} from 'react';
import "./FollowButton.css"

class FollowButton extends Component {
    state = {
      followed: false,
      innerButtonText: "Follow",
      user: this.props.user,
      currentUser: this.props.currentUser,
    };

    onMouseOverHandler = e => {
        e.preventDefault();
        if (this.state.followed === true) {
            this.setState({innerButtonText: "Unfollow"});
            e.target.className = "unfollow"
        }
    };

    onMouseLeaveHandler = e => {
        e.preventDefault();
        if (this.state.followed === false) {
            this.setState({innerButtonText: "Follow"});
            e.target.className = "follow"
        } else if (this.state.followed === true) {
            this.setState({innerButtonText: "Following"});
            e.target.className = "following"
        }
    };

    handleClick = e => {
        const {followed, user,currentUser} = this.state;
      e.preventDefault();
      if (followed === false) {
          user.followers.push(currentUser);
          this.setState({followed: true, innerButtonText: "Following"});
          e.target.className = "following"
      } else {
          let index = user.followers.indexOf(currentUser);
          user.followers.splice(index, 1);
          this.setState({followed: false, innerButtonText: "Follow"});
          e.target.className = "follow"
      }
    };

    render() {
        const {innerButtonText} = this.state;
        return (
            <div>
                <button
                    onMouseEnter={this.onMouseOverHandler}
                    onMouseLeave={this.onMouseLeaveHandler}
                    onClick={this.handleClick}
                    className="follow"
                >
                    {innerButtonText}
                </button>
            </div>
        );
    }
}

export default FollowButton;