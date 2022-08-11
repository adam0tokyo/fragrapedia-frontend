import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Nav';
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Fragrances from './components/fragrances/Fragrances';
import SingleFragrance from './components/fragrances/SingleFragrance';
import Users from './components/users/Users';
import axios from 'axios';
// import { FragranceProvider } from "./components/fragrances/FragranceContext";
// import { createContext, useContext } from "react";
// export const TempContext = createContext();

function App() {

    //State Declarations
    // const [fart, setFart] = useState("burrrr");
    const [fragrancesList, setFragrancesList] = useState([]);
    const [selectedFragrance, setSelectedFragrance] = useState("none");
    // const [currentView, setCurrentView] = useState("fragrances"); //return string to decide all or single photo


    //useEffects
    useEffect(() => {
        axios
            .get('https://fragrapedia-be.herokuapp.com/api/fragrances')
            .then((res) => {
                // axios.get('/api/fragrances').then((res) => {
                // console.log('AXIOS!:', res.data);
                setFragrancesList(res.data);
            });
    }, []);

    //Handlers - helper functions

    //Render
    return (
        <div className="App">
            {/* <TempContext.Provider value={fart}> */}
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/fragrances">
                        <Route index element={<Fragrances 
                            setFragrancesList={setFragrancesList}
                            fragrancesList={fragrancesList}
                            setSelectedFragrance={setSelectedFragrance}
                            selectedFragrance={selectedFragrance}
                        />} />
                        <Route path=":fragName" element={<SingleFragrance 
                            setFragrancesList={setFragrancesList}
                            fragrancesList={fragrancesList}
                            setSelectedFragrance={setSelectedFragrance}
                            selectedFragrance={selectedFragrance}
                        />} />
                    </Route>
                    <Route path="/Users" element={<Users />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            {/* </TempContext.Provider> */}
        </div>
    );
}



export default App;

