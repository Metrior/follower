import React, {Component} from 'react';
import Header from "./components/Header"
import List from "./components/List"
// используй цсс-модули, так они защитят твое приложение от влияния внешних стилей
import './App.css';
import {connect} from "react-redux";
import {setUser, setUsersList} from "./redux/actions"
import db from "./db";

class App extends Component {
    componentDidMount(){
        // наскольк опо мню, в задании нужно было делать атворизацию через куки
        this.props.setUser(JSON.parse(localStorage.getItem("currentUser")));
        if (localStorage.getItem("usersList")) {
            // ключи для хранения в LS – в константы
            this.props.setUsersList(JSON.parse(localStorage.getItem("usersList")))
        }
    }

    render() {
        // вынеси компонент из главной вьюхи. Тут должно быть просто <Follower/>
        // сейчас у тебя на каждое изменения статуса каждого юзера полнотью перерисовывается список, это неоптимально(но и так сойдет в целом)
        // красивое решение – создать компонент User(который будет ренедриться в цикле внутри List, а в нем уже подписываться на изменения стора и обновлять статус кнопки и число фолловеров)
        // а тут следить только за измением состава пользователей.
        // однако на уровень джуна, повторюсь, это необязателтно. Просто хотела обратить твое внимание


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
