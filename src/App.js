import React, {Component} from 'react';
import Header from "./components/Header"
import List from "./components/List"
import './App.css';
import {connect} from "react-redux";
import {setUser, setUsersList} from "./redux/actions"
import db from "./db";

class App extends Component {
    componentDidMount(){
        this.props.setUser(JSON.parse(localStorage.getItem("currentUser")));
        if (localStorage.getItem("usersList")) {
            this.props.setUsersList(JSON.parse(localStorage.getItem("usersList")))
        }
    }

    render() {
        return (
            <div className="App">
                <Header currentUser={this.props.currentUser}/>
                {this.props.currentUser ?
                    <List users={this.props.usersList.currentUsersList}
                          groups={db.groups}
                          currentUser={this.props.currentUser}/>
                    : null}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    usersList: state.usersList
});

export default connect(mapStateToProps, {setUser, setUsersList})(App);
