import React, { Component } from 'react'


// import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import './App.css';
// import ParticlesBg from 'particles-bg'
// function App() {
 
  
//   return (
    <>
    {/* <BrowserRouter>
    <div className="absolute z-90"> */}
    {/* <ParticlesBg color="#ff0000" num={200} type="circle" bg={true} /> */}
    {/* </div> */}
    {/* <div className="App w-screen h-screen z-30 "> 
    <Layout/>
  
     </div>
   
   </BrowserRouter> */}
 
   </>
//   );
// }

// export default App;



class App extends Component {
  render () {
    return (
      <>
        <BrowserRouter>
        <div className="App w-screen h-screen z-30 "> 
    <Layout/>
    
     </div>
        </BrowserRouter>
      
      </>
    )
  }
}
export default App;

