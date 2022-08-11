import React, { useState, useEffect } from "react";
import { Outlet, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Fragrances from './components/fragrances/Fragrances';
import SingleFragrance from './components/fragrances/SingleFragrance';
import Users from './components/users/Users';
import axios from 'axios';

function App() {

    //State Declarations
    const [fragrancesList, setFragrancesList] = useState([]);
    const [currentView, setCurrentView] = useState("fragrances"); //return string to decide all or single photo
    const [selectedFragrance, setSelectedFragrance] = useState("");


    //useEffects
    useEffect(() => {
        axios
            .get('https://fragrapedia-be.herokuapp.com/api/fragrances')
            .then((res) => {
                // axios.get('/api/fragrances').then((res) => {
                // console.log('AXIOS!:', res.data);
                setFragrancesList(res.data);
            });
    });

    //Handlers - helper functions
    const Home = () => {
        <div>
            <h1>HOME page</h1>
        </div>
    };

    //Render
    return (
            <div className="App">
                
                <Nav />
                <Home />
                <Fragrances 
                fragrancesList = {fragrancesList}
                setCurrentView={setCurrentView}
                setSelectedFragrance={setSelectedFragrance}
                />
                {/* <Users /> */}
                
                <Link to="users">uSe</Link>
                <SingleFragrance />
            
                {/* <Route path="/" element={<Nav />} /> */}
                {/* <Route path="/users" element={<Users />} /> */}
                {/* <Users /> */}
            {/* <header className="App-header"> */}
                {/* <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
            </a> */}
            {/* </header> */}
            {/* {currentView === "fragrances" ? (
                <Fragrances 
                fragrancesList = {fragrancesList}
                setCurrentView={setCurrentView}
                setSelectedFragrance={setSelectedFragrance}
                />
                ) : (
                    <SingleFragrance
                    setCurrentView={setCurrentView}
                    setSelectedFragrance={setSelectedFragrance}
                    selectedFragrance={selectedFragrance}
                    />
                )} */}
            </div>
    );
}



export default App;
