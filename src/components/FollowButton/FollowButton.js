import React, {Component} from 'react';
import "./FollowButton.css"
import connect from "react-redux/es/connect/connect";
import {setUsersList} from "../../redux/actions"

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
          const newFollowers = user.followers.push(JSON.parse(currentUser));
          const allUsersList = this.props.currentUsersList;
          allUsersList[user.followers]=newFollowers;
          this.props.setUsersList(allUsersList);
          localStorage.setItem("usersList", allUsersList);
          this.setState({followed: true, innerButtonText: "Following"});
          e.target.className = "following"
      } else {
          let index = user.followers.indexOf(currentUser);
          const newFollowers = user.followers.splice(index, 1);
          const allUsersList = this.props.currentUsersList;
          allUsersList[user.followers]=newFollowers;
          this.props.setUsersList(allUsersList);
          this.setState({followed: false, innerButtonText: "Follow"});
          e.target.className = "follow"
      }
    };

    render() {
        const {innerButtonText} = this.state;
        return (
                <button
                    onMouseEnter={this.onMouseOverHandler}
                    onMouseLeave={this.onMouseLeaveHandler}
                    onClick={this.handleClick}
                    className="follow"
                >
                    {innerButtonText}
                </button>
        );
    }
}

const mapStateToProps = state => ({
    currentUsersList: state.usersList.currentUsersList,
});

export default connect(mapStateToProps, {setUsersList})(FollowButton);