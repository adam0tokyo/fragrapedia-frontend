// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { useParams } from "react-router-dom";

function SingleFragrance() {
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
    let params = useParams();

    return (
        <div className="SingleFragrance">
            {/* <h1>Fragrances</h1>
            <ul>
                {fragrances.map((fragrance) => {
                    return (
                        <li key={fragrance.id.toString()}>
                            {fragrance.display_name} {fragrance.id}
                        </li>
                    );
                })}
            </ul> */}
            <h2>A THING: {params.singleFrag}</h2>
        </div>
    );
}

export default SingleFragrance;
