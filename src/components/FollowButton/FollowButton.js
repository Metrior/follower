import React, { Component } from "react";
import styles from "./FollowButton.module.css";
import connect from "react-redux/es/connect/connect";
import { setUsersList } from "../../redux/actions";

class FollowButton extends Component {
  state = {
    followed: false,
    user: this.props.user,
    currentUser: this.props.currentUser
  };

  componentDidMount() {
    this.state.user.followers.map(follower => {
      if (follower.name === this.props.currentUser.name) {
        this.setState({ followed: true, buttonText: "Following" });
      }
    });
  }

  handleClick = () => {
    const { followed, user, currentUser } = this.state;
    if (followed === false) {
      user.followers.push(currentUser);
      this.props.setUsersList(this.props.currentUsersList);
      this.setState({ followed: true });
    } else {
      let index = user.followers.indexOf(currentUser);
      user.followers.splice(index, 1);
      this.props.setUsersList(this.props.currentUsersList);
      this.setState({ followed: false });
    }
  };

  render() {
    return (
      <button
        onClick={this.handleClick}
        className={this.state.followed ? styles.following : styles.follow}
      >
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
