import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';
import Student from './Component/Student';
import Contact from './Component/Contact';

function App() {
  return (
    <Router>
        <Header/>

            <Routes>
                <Route path="/" element={   <Navigate   to={"/home"}/>}/>
                <Route path="/home" element={ <Home/> }/>
                <Route path="/student" element={ <Student/> }/>
                <Route path="/contact" element={ <Contact/> }/>
            </Routes>
    </Router>
  );
}

export default App;
