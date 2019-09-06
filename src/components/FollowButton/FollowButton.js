import React, {Component} from 'react';
import "./FollowButton.css"
import connect from "react-redux/es/connect/connect";
import {setUsersList} from "../../redux/actions"

class FollowButton extends Component {
    state = {
      followed: false,
      user: this.props.user,
      currentUser: this.props.currentUser,
    };

    componentDidMount(){
        this.state.user.followers.map(follower=>{
            if (follower.name===this.props.currentUser.name){
                this.setState({followed:true})
            }
        })
    }

    onMouseOverHandler = e => {
        e.preventDefault();
        if (this.state.followed === true) {
            e.target.innerText = "Unfollow";
        }
    };

    onMouseLeaveHandler = e => {
        e.preventDefault();
        if (this.state.followed === false) {
            e.target.innerText = "Follow";
        } else if (this.state.followed === true) {
            e.target.innerText = "Following";
        }
    };

    handleClick = e => {
        const {followed, user,currentUser} = this.state;
      e.preventDefault();
      if (followed === false) {
          user.followers.push(currentUser);
          const allUsersList = this.props.currentUsersList;
          this.props.setUsersList(allUsersList);
          localStorage.setItem("usersList", JSON.stringify(allUsersList));
          this.setState({followed: true, innerButtonText: "Following"});
          e.target.className = "following"
      } else {
          let index = user.followers.indexOf(currentUser);
          user.followers.splice(index, 1);
          const allUsersList = this.props.currentUsersList;
          this.props.setUsersList(allUsersList);
          localStorage.setItem("usersList", JSON.stringify(allUsersList));
          this.setState({followed: false, innerButtonText: "Follow"});
          e.target.className = "follow"
      }
    };

    render() {
        return (
                <button
                    onMouseEnter={this.onMouseOverHandler}
                    onMouseLeave={this.onMouseLeaveHandler}
                    onClick={this.handleClick}
                    className={this.state.followed ? "following" : "follow"}
                >
                    {this.state.followed ? "Following" : "Follow"}
                </button>
        );
    }
}

const mapStateToProps = state => ({
    currentUsersList: state.usersList.currentUsersList,
});

export default connect(mapStateToProps, {setUsersList})(FollowButton);