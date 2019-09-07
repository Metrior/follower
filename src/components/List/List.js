import React, {Component} from 'react';
import FollowButton from "../FollowButton"
import "./List.css"

class List extends Component {
    state = {
        currentUser: this.props.currentUser,
        users: this.props.users,
        groups: this.props.groups
    };

    // из финального кода удалить все комментарии
    // shouldComponentUpdate(nextProps){
    //     const currentUser = this.props.currentUser !== nextProps.currentUser;
    //     console.log(currentUser)
    //     // this.setState({users:this.props.users, currentUser: this.props.currentUser})
    //     return currentUser
    // }
    //
    // componentDidUpdate(prevProps){
    //     if (this.props.currentUser !== prevProps.currentUser) {
    //         console.log(prevProps, this.props);
    //         this.setState({currentUser: this.props.currentUser})
    //     }
    // }

    getList = users => {
        if(!users){
            return null;
        }
        return Object.values(users).map((user,i)=>{
            if (user.name !== this.state.currentUser.name) {
                // создай копонент User, будет изящнее
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
        // тут у тебя линтер ругается, все ошибки линтера надо устранить
        // плюс установи prettier, чтобы все было красиво с пробелами и кодстайлом. это сделает твой код визуально куда чище
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