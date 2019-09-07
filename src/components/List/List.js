import React, {Component} from 'react';
import FollowButton from "../FollowButton"
import "./List.css"

class List extends Component {
    state = {
        currentUser: this.props.currentUser,
        users: this.props.users,
        groups: this.props.groups
    };

    getList = users => {
        if(!users){
            return null;
        }
        return Object.values(users).map((user,i)=>{
            if (user.name !== this.state.currentUser.name){
                return (<div key={i}>
                    {user.name}
                    <span className="info"> {(user.followers || []).length} </span>
                    <span className="info">  {this.getGroup(user, this.state.groups)} </span>
                    <FollowButton
                        users={this.state.users}
                        user={user}
                        currentUser={this.state.currentUser}/>
                </div>)
            }
        })
    };

    getGroup = (user, groups) => {
        return Object.values(groups).map(group=>{
            if (group.id === user.group_id){
                return group.name
            }
        })
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