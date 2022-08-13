// import React, { useState, useEffect, useContext } from 'react';
// import FragranceContext from './FragranceContext';
// import axios from 'axios';
// import React from "react";
import { Link } from "react-router-dom";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


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

    // const storage = getStorage();
    // getDownloadURL(ref(storage, `images/Tom-Ford-Tobacco-Vanille-2007`))
    //     .then((url) => {
    //         // const img = document.getElementById('myimg');
    //         // img.setAttribute('src', url)
    //         console.log(url);
    //     }).catch((error) => {
    //         console.error(error)
    //     });
    const storage = getStorage()

    const setUpImage = function(lName) {
        getDownloadURL(ref(storage, `images/${lName}`))
        .then((url) => {
            const img = document.getElementById(`image-${lName}`);
            img.setAttribute('src', url);
          })
          .catch((error) => {
            console.error(error);
        });
        return (<img id={"image-"+lName} alt={lName} />);
    }
    



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
                            {setUpImage(fragrance.list_name)}
                            {/* {<img id={"image-"+fragrance.list_name} alt={fragrance.list_name} />} */}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Fragrances;
