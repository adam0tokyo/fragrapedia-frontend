// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useParams, Link } from "react-router-dom";
// import { TempContext } from '../../App'
// import axios from "axios";
import { Button } from '@mui/material';

import { getStorage, ref, getDownloadURL } from "firebase/storage";


function SingleFragrance({ fragrancesList, setFragrancesList, selectedFragrance, setSelectedFragrance }) {

    //STATE
    // const [selectedFragrance, setSelectedFragrance] = useState("none");
    // const passedFart = useContext(TempContext);
    // const [imgUrl, setImgUrl] = useState("");

    //USEEFFECT
    // useEffect(() => {
    //     findTargetFragrance(params.fragName)
    //         // .then((res) => {
    //         //     console.log("selectedFragrance!", selectedFragrance);
    //         //     return res;
    //         // })
    
    //     //Keep axios call option for case keeping the whole db in state is too expesnive
    //     // axios
    //     //     .get(`https://fragrapedia-be.herokuapp.com/api/fragrances/${params.fragName}`)
    //     //     .then((res) => {
    //     //         setSelectedFragrance(res.data[0]);
    //     //     }, []);


    // }, []);


    const findTargetFragrance = async (target) => {
        // console.log(selectedFragrance);
        // if (fragrancesList.length < 1) {
        //     await axios
        //         .get('https://fragrapedia-be.herokuapp.com/api/fragrances')
        //         .then((res) => {
        //             // axios.get('/api/fragrances').then((res) => {
        //                 // console.log('AXIOS!:', res.data);
        //                 setFragrancesList(res.data);
        //             });
        // }
        await setSelectedFragrance(fragrancesList.find( e => e.list_name === target));
                
    }

// inifnite loops, but adding the conditional array throws an error. hmm
    // useEffect(() => {
    //     axios
    //         .get('https://fragrapedia-be.herokuapp.com/api/fragrances')
    //         .then((res) => {
    //             // axios.get('/api/fragrances').then((res) => {
    //             // console.log('AXIOS!:', res.data);
    //             setFragrancesList(res.data);
    //         });
    // });

    //HELPER FUNCTIONS
    let params = useParams();
    const storage = getStorage();
    findTargetFragrance(params.fragName);
    
    
    
    // const testF = (async () => {
    //     console.log("SELECTED F", selectedFragrance)
    //     const myUrl = await getDownloadURL(ref(storage, `images/${selectedFragrance.list_name}`)).then((res) => {
    //         return res;
    //     })
    //     console.log("WHAT DO YOU DO?", myUrl);
    // });
    

    // const testImageCall = async () => {
    //     axios.get(
    //         "https://firebasestorage.googleapis.com/v0/b/fragrapedia.apps…2Faiiee?alt=media&token=030e0d1e-d43a-464a-8423-dda67ef8d8ee"
    //     ).then(res => {
    //         return (
    //             <>
    //             <img src={res} alt="newTest"/>
    //             </>
    //         )
    //     })
    // }

    // getDownloadURL(ref(storage, `images/${params.fragName}`))
    //     .then((url) => {
    //         const img = document.getElementById(`image-${params.fragName}`);
    //         img.setAttribute('src', url);
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //     });
    
        
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
        <div className="SingleFragrance">
            <h2>A THING: {params.fragName|| "empty"}</h2>
            <h3>{selectedFragrance.display_name|| "empty"}</h3>
            <ul>
                <li>{selectedFragrance.list_name|| "empty"}</li>
                <li>{selectedFragrance.house|| "empty"}</li>
                {selectedFragrance.collection ? (<li>{selectedFragrance.collection}</li>) : <></>}
                <li>{selectedFragrance.release|| "empty"}</li>
                <li>{selectedFragrance.notes|| "empty"}</li>
                <li>{selectedFragrance.added || "empty"}</li>
                {selectedFragrance.concentration ? (<li>{selectedFragrance.concentration}</li>) : <></>}
                {/* <img id={"image-"+params.fragName} alt="test" /> */}
                {setUpImage(selectedFragrance.list_name)}

            </ul>
            {/* <h4>{passedFart}</h4> */}
            <Button component={Link} to="/edit_fragrance">Edit Fragrance</Button>
            <Button component={Link} to="/fragrances">Back</Button>
        </div>
    );
}

export default SingleFragrance;
