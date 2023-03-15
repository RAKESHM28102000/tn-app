import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from "./components/About";
import Feed from "./components/Feed";
import Form from "./components/Form";
import Invite from "./components/Invite";
import Contact from "./components/Contact";




function App() {
  return (
    <div>
     <Navbar/>
     <Home/>
     <About/>
     <Feed/>
     <Form/>
     <Invite/>
     <Contact/>
    </div>
  );
}

export default App;
