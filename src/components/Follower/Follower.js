import React, { Component } from "react";
import Header from "../Header";
import List from "../List";
import db from "../../db";
import {connect} from "react-redux";
import { setUser, setUsersList } from "../../redux/actions";

class Follower extends Component {
  render() {
    return (
      <div>
        <Header currentUser={this.props.currentUser} />
        {this.props.currentUser ? (
          <List
            users={this.props.usersList.currentUsersList}
            groups={db.groups}
            currentUser={this.props.currentUser}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  usersList: state.usersList
});

export default connect(
  mapStateToProps,
  { setUser, setUsersList }
)(Follower);
