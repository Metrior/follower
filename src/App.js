import React, { Component } from "react";
import styles from "./App.module.css";
import Follower from "./components/Follower";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Follower />
      </div>
    );
  }
}

export default App;
