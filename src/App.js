import React from 'react';
import Header from "./components/Header"
import List from "./components/List"
import './App.css';
import db from "./db";

function App() {
  return (
      <div className="App">
          <Header currentUser={localStorage.getItem("currentUser")}/>
          {JSON.parse(localStorage.getItem("currentUser")) ?
              <List users={db.users}
                    groups={db.groups}
                    currentUser={JSON.parse(localStorage.getItem("currentUser"))}/>
              : null}
      </div>
  );
}

export default App;
