import React, { Component } from "react";
import styles from "./FollowButton.module.css";
import connect from "react-redux/es/connect/connect";
import { setUsersList } from "../../redux/actions";

class FollowButton extends Component {
  state = {
    followed: false,
    user: this.props.user,
    currentUser: this.props.currentUser,
    buttonText: "Follow"
  };

  componentDidMount() {
    this.state.user.followers.map(follower => {
      if (follower.name === this.props.currentUser.name) {
        this.setState({ followed: true, buttonText: "Following" });
      }
    });
  }

  onMouseOverHandler = () => {
    if (this.state.followed) {
      this.setState({ buttonText: "Unfollow" });
    }
  };

  onMouseLeaveHandler = () => {
    if (this.state.followed === false) {
      this.setState({ buttonText: "Follow" });
    } else if (this.state.followed === true) {
      this.setState({ buttonText: "Following" });
    }
  };

  setUsers = () => {
    const allUsersList = this.props.currentUsersList;
    this.props.setUsersList(allUsersList);
    localStorage.setItem("usersList", JSON.stringify(allUsersList));
  };

  handleClick = e => {
    const { followed, user, currentUser } = this.state;
    e.preventDefault();
    if (followed === false) {
      user.followers.push(currentUser);
      this.setUsers();
      this.setState({ followed: true, buttonText: "Unfollow" });
    } else {
      let index = user.followers.indexOf(currentUser);
      user.followers.splice(index, 1);
      this.setUsers();
      this.setState({ followed: false, buttonText: "Follow" });
    }
  };

  render() {
    return (
      <button
        onMouseOver={this.onMouseOverHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        onClick={this.handleClick}
        className={this.state.followed ? styles.following : styles.follow}
      >
        {this.state.buttonText}
      </button>
    );
  }
}

const mapStateToProps = state => ({
  currentUsersList: state.usersList.currentUsersList
});

export default connect(
  mapStateToProps,
  { setUsersList }
)(FollowButton);
