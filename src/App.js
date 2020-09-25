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
      
      <Post 
        username="stephenjohnblair" 
        caption="Making an Instragram Clone!" 
        imageUrl="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png" />
      <Post 
        username="testuser1" 
        caption="Passing through props!"
        imageUrl="https://cdn.freecodecamp.org/platform/universal/fcc-og-1200-social-green.png" />
      <Post
        username="testuser2" 
        caption="Creating an app!"
        imageUrl="https://firebase.google.com/images/brand-guidelines/logo-vertical.png" />


      {/* Posts */}
      {/* Posts */}

    </div>
  );
}

export default App;
