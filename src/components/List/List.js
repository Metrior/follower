import React, { Component } from "react";
import User from "../User";

class List extends Component {
  state = {
    currentUser: this.props.currentUser,
    users: this.props.users,
    groups: this.props.groups
  };

  getList = users => {
    if (!users) {
      return null;
    }
    return Object.values(this.props.users).map((user, index) => (
      <User
        key={index}
        user={user}
        currentUser={this.state.currentUser}
        groups={this.state.groups}
      />
    ));
  };

  render() {
    return (
      <div>
        Choose users to follow:
        {this.getList(this.state.users)}
      </div>
    );
  }
}

export default List;
