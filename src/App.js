import './App.css'
import React from "react";
import {Routes, Route} from "react-router-dom"
//import Countries from "./page/Countries"
//import Country from './page/Country'
import Home from './Components/Home'
import Countries from "./Components/Countries"
import Country from "./Components/Country"
import SelectedCountries from "./Components/SelectedCountries"
function App() {
  return (
    
    <div className="App">
      <Routes>
       <Route path="/" element={<Home/>} />
        <Route path="/countries" element={<Countries/>}/>
        <Route path="/countries/:name" element={<Country/>}/>
        <Route path="/favoritCountries" element={<SelectedCountries />} />
      </Routes>
      </div>
    
  );
}

export default App
