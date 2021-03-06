import React, { Component } from "react";
import FollowButton from "../FollowButton";
import styles from "./User.module.css";

class User extends Component {
  getGroup = (user, groups) => {
    return Object.values(groups).map(group => {
      if (group.id === user.group_id) {
        return group.name;
      }
    });
  };

  render() {
    const { user } = this.props;
    if (user.name !== this.props.currentUser.name) {
      return (
        <div>
          {user.name}
          <span className={styles.info}> {(user.followers || []).length} </span>
          <span className={styles.info}>
            {" "}
            {this.getGroup(user, this.props.groups)}{" "}
          </span>
          <FollowButton
            users={this.props.users}
            user={user}
            currentUser={this.props.currentUser}
          />
        </div>
      );
    } else return null;
  }
}

export default User;
