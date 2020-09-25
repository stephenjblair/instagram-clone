import React from 'react';
import Post from './Post';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="app__header"> 
        <img 
        className="app__headerImage"src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        alt="instagram-logo"
        /> 
      </div>
      
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      
      {/* Posts */}
      {/* Posts */}

    </div>
  );
}

export default App;
