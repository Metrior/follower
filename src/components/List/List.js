import React, {Component} from 'react';
import "./List.css"
import FollowButton from "../FollowButton"

class List extends Component {
    state = {
        currentUser: this.props.currentUser,
        users: this.props.users,
        groups: this.props.groups
    };

    shouldComponentUpdate(nextProps){
        const currentUser = this.props.currentUser !== nextProps.currentUser;
        console.log(currentUser)
        // this.setState({users:this.props.users, currentUser: this.props.currentUser})
        return currentUser
    }

    componentDidUpdate(prevProps){
        if (this.props.currentUser !== prevProps.currentUser) {
            console.log(prevProps, this.props);
            this.setState({currentUser: this.props.currentUser})
        }
    }

    getList = users => {
        return Object.values(users).map(user=>{
            if (user.name !== this.state.currentUser.name){
                return <div>
                    {user.name}
                    {user.followers.length}
                    {this.getGroup(user, this.state.groups)}
                    <FollowButton user={user} currentUser={this.state.currentUser}/>
                </div>
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
                {this.getList(this.state.users)}
                <button onClick={()=>{console.log(this.props.currentUser)}}>shit</button>
            </div>
        );
    }
}

export default List;