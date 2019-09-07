import React, {Component} from 'react';
import "./FollowButton.css"
import connect from "react-redux/es/connect/connect";
import {setUsersList} from "../../redux/actions"

class FollowButton extends Component {
    state = {
      followed: false,
      user: this.props.user,
      currentUser: this.props.currentUser,
      buttonText: "Follow",
      buttonClass: "follow"
    };

    componentDidMount(){
        this.state.user.followers.map(follower=>{
            if (follower.name===this.props.currentUser.name){
                this.setState({followed:true, buttonText: "Following", buttonClass: "following"})
            }
        })
    }

    onMouseOverHandler = e => {
        e.preventDefault();
        if (this.state.followed === true) {
            this.setState({buttonText:"Unfollow", buttonClass:"unfollow"});
        }
    };

    onMouseLeaveHandler = e => {
        e.preventDefault();
        if (this.state.followed === false) {
            this.setState({buttonText:"Follow",buttonClass:"follow"});
        } else if (this.state.followed === true) {
            this.setState({buttonText:"Following", buttonClass:"following"});
        }
    };

    setUsers = () => {
        const allUsersList = this.props.currentUsersList;
        this.props.setUsersList(allUsersList);
        localStorage.setItem("usersList", JSON.stringify(allUsersList));
    };

    handleClick = e => {
      const {followed, user,currentUser} = this.state;
      e.preventDefault();
      if (followed === false) {
          user.followers.push(currentUser);
          this.setUsers();
          this.setState({followed: true, buttonText: "Unfollow", buttonClass:"unfollow"});
      } else {
          let index = user.followers.indexOf(currentUser);
          user.followers.splice(index, 1);
          this.setUsers();
          this.setState({followed: false, buttonText: "Follow", buttonClass:"follow"});
      }
    };

    render() {
        return (
                <button
                    onMouseOver={this.onMouseOverHandler}
                    onMouseLeave={this.onMouseLeaveHandler}
                    onClick={this.handleClick}
                    className={this.state.buttonClass}
                >
                    {this.state.buttonText}
                </button>
        );
    }
}

const mapStateToProps = state => ({
    currentUsersList: state.usersList.currentUsersList,
});

export default connect(mapStateToProps, {setUsersList})(FollowButton);