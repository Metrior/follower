import React, {Component} from 'react';
import "./FollowButton.css"
import firebase from "../../firebase";

class FollowButton extends Component {
    state = {
      followed: false,
      innerButtonText: "Follow"
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
        }
    };

    handleClick = e => {
      e.preventDefault();
      if (this.state.followed === false) {
          firebase.database().ref("users").child("mxqday7ExASbb1icKc3jjUU8wuE2").child("following").on("value", snap=>{
              let followed = snap.val().push(this.props.currentUser);
              firebase.database().ref("users").child("mxqday7ExASbb1icKc3jjUU8wuE2").child("following").set(
                  followed
              )
          });
          this.setState({followed: true});
          e.target.className = "following"
      } else {
          // firebase.database().ref("users").child("mxqday7ExASbb1icKc3jjUU8wuE2").child("following").on("value", snap=>{
          //     firebase.database().ref("users").child("mxqday7ExASbb1icKc3jjUU8wuE2").child("following").set(
          //         null
          //     )
          // });
          this.setState({followed: false})
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