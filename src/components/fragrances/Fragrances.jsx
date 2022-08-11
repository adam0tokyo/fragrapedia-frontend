// import React, { useState, useEffect, useContext } from 'react';
// import FragranceContext from './FragranceContext';
// import axios from 'axios';
// import React from "react";
import { Link } from "react-router-dom";

function Fragrances({ fragrancesList, setFragrancesList, selectedFragrance, setSelectedFragrance }) {

    //STATE
    
    //useEffects
    // useEffect(() => {
    //     axios
    //         .get('https://fragrapedia-be.herokuapp.com/api/fragrances')
    //         .then((res) => {
    //             setFragrancesList(res.data);
    //         }, []);
    // });

    //HELPER FUNCTIONS
    // const { testItem } = useContext(FragranceContext);

    return (
        <div className="Fragrances">
            <h1>Fragrances</h1>
            
            {fragrancesList.map((frag) => (
                <Link
                    style={{ display: "block", marging: "1rem 0"}}
                    to={`/fragrances/${frag.list_name}`}
                    key={frag.id}
                >
                    {frag.display_name}
                </Link>
                
            ))}
            <ul>
                {fragrancesList.map((fragrance) => {
                    return (
                        <li key={fragrance.id.toString()}>
                            {fragrance.display_name} {fragrance.id}
                            {fragrance.house}
                            {fragrance.collection}
                            {fragrance.release}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Fragrances;
