import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Fragrances() {
    //STATE
    const [fragrances, setFragrances] = useState([]);

    //USEEFFECT
    // axios.get('https://fragrapedia-be.herokuapp.com/api/fragrances).then((res) => {
    useEffect(() => {
        axios.get('/api/fragrances').then((res) => {
            // console.log('AXIOS!:', res.data);
            setFragrances(res.data);
        });
    });

    //HELPER FUNCTIONS
    // none currently

    return (
        <div className="Fragrances">
            <h1>Fragrances</h1>
            <ul>
                {fragrances.map((fragrance) => {
                    return (
                        <>
                            <li key={fragrance.id}>{fragrance.display_name}</li>
                        </>
                    );
                })}
                git
            </ul>
        </div>
    );
}

export default Fragrances;
