import React, { Component } from "react";
import User from "../User";
import "./List.css";

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
    return (
      <User
        users={users}
        currentUser={this.state.currentUser}
        groups={this.state.groups}
      />
    );
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
