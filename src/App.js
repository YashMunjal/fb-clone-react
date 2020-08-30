import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Widgets from "./components/Widgets/Widgets";
import Login from "./components/login/Login"
import { useStateValue } from "./StateProvider";

function App() {
  
  const [{user},dispatch] = useStateValue();
  console.log(user);
  return (
    //BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header></Header>
          <div className="app__body">
            <Sidebar></Sidebar>
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
