import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App w-screen h-screen "> 
      <Layout/>
     </div>
   </BrowserRouter>
  );
}

export default App;
