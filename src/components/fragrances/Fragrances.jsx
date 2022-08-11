import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import React from "react";
import { Link, Outlet } from "react-router-dom";

function Fragrances( { fragrancesList}) {
    //STATE
    // const [fragrances, setFragrances] = useState([]);

    //USEEFFECT
    // useEffect(() => {
    //     axios
    //         .get('https://fragrapedia-be.herokuapp.com/api/fragrances')
    //         .then((res) => {
    //             // axios.get('/api/fragrances').then((res) => {
    //             // console.log('AXIOS!:', res.data);
    //             setFragrances(res.data);
    //         });
    // });

    //HELPER FUNCTIONS
    

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
            {/* <ul>
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
            </ul> */}
            <Outlet />
        </div>
    );
}

export default Fragrances;
