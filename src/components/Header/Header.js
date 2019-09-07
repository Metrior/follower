import React, {Component} from 'react';
import {connect} from "react-redux"
import {setUser} from "../../redux/actions"

class Header extends Component {
    state = {
        currentUser: this.props.currentUser,
    };

    componentDidUpdate(prevProps){
        // currentUser это объект, сравнивая два объекта с идентичным кодержимым,
        // но разными ссылками, ты получишь false. Тут лучше сравнивать уникальные поля, например, id
        if (this.props.currentUser !== prevProps.currentUser) {
            // currentUser можно вынимать из стора, зачем передавать его как пропс?
            // Или ты передаешь что-то как пропс снаружи, или меняешь это значнеие внутри кода компонента, иначе получается каша
            this.setState({ currentUser: this.props.currentUser });
        }
    }

    handleSighOut = () => {
        localStorage.removeItem("currentUser");
        // в идеале надо прикрутить к редаксу эффекты – чтобы он, устанавляия значние, автоматом и LS писал
        this.props.setUser(null)
    };

    handleSignIn = () => {
        const firstUser = {
            "id": 1,
            "name": "Dan",
            "group_id": 1,
            "followers":[]
        };
        localStorage.setItem("currentUser", JSON.stringify(firstUser));
        this.props.setUser(firstUser)
    };

    render() {
        return (
            <div>
                {this.props.currentUser ?
                    <div>
                        welcome {this.props.currentUser.name}
                        <button onClick={this.handleSighOut}>Log out</button>
                    </div>
                    :
                    <div>
                        {<div>Must be signed in</div>}
                        <button onClick={this.handleSignIn}>Log in as user1</button>
                    </div>
                }
            </div>
        );
    }
}

export default connect(null, {setUser})(Header);