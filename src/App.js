import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Feed from './components/feed/Feed'

function App() {
  return (
    //BEM naming convention
    <div className="app">

      {/*Header*/}
      <Header></Header>
      <div className="app__body">
        <Sidebar></Sidebar>
        <Feed />
      </div>

      {/*App Body*/}


    </div>
  );
}

export default App;
