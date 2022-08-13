// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Link } from "react-router-dom";
// import { TempContext } from '../../App'
import axios from "axios";
import  { useState } from 'react';
import { Button } from '@mui/material';
import { storage } from '../firebase';
import { ref, uploadBytes } from 'firebase/storage';
// import { ref, uploadBytes, getStorage, deleteObject } from 'firebase/storage';

function EditFragrance({ setFragrancesList, fragrancesList, selectedFragrance, setSelectedFragrance, updatePlease, setUpdatePlease }) {
    
    //STATE
    // const [selectedFragrance, setSelectedFragrance] = useState("");
    // const passedFart = useContext(TempContext);
    // const [newFragrance, setNewFragrance] = useState("");
    const [listName, setListName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [collection, setCollection] = useState("");
    const [house, setHouse] = useState("");
    const [release, setRelease] = useState("");
    const [notes, setNotes] = useState("");

    //USEEFFECT
    // useEffect(() => {
    //     findTargetFragrance(params.fragName);
    //     // console.log(fragrancesList);
    //     // axios
    //     //     .get(`https://fragrapedia-be.herokuapp.com/api/fragrances/${params.fragName}`)
    //     //     .then((res) => {
    //     //         setSelectedFragrance(res.data[0]);
    //     //     }, []);
    // });

    //HELPER FUNCTIONS
    // let params = useParams();

    // const findTargetFragrance = (target) => {
    //     setSelectedFragrance(fragrancesList.find( e => e.list_name === target));
    // }
    // const showResults = () => console.log(document.getElementById('results'));

    const listNameUpdate = e => { setListName(e.target.value)};
    const displayNameUpdate = e => { setDisplayName(e.target.value)};
    const houseUpdate = e => { setHouse(e.target.value)};
    const collectionUpdate = e => { setCollection(e.target.value)};
    const releaseUpdate = e => { setRelease(e.target.value)};
    const notesUpdate = e => { setNotes(e.target.value)};
    const [imageUpload, setImageUpload] = useState(null);


    const axiosSubmit = async (e) => {
        e.preventDefault();
        console.log("YAY", listName, displayName, house, collection, release, notes);
        let newFragObj = {
            list_name: listName,
            display_name: displayName,
            house: house,
            collection: collection,
            release: release,
            notes: notes
        };
        // console.log("SHOW IT", newFragObj);
        await axios.patch(`https://fragrapedia-be.herokuapp.com/api/fragrances/${selectedFragrance.list_name}`, newFragObj)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.error(error);
          });
          setUpdatePlease(updatePlease += 1);
    }

    const axiosDelete = async (e) => {
        e.preventDefault();
        await axios.delete(`https://fragrapedia-be.herokuapp.com/api/fragrances/${selectedFragrance.list_name}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.error(error);
          });
          setUpdatePlease(updatePlease += 1);
          //TODO redirect on successful delete
    }

    const uploadImage = async () => {
        if (!imageUpload) return;
        const imageRef = ref(storage, `images/${listName}`);
        await 
        await uploadBytes(imageRef, imageUpload).then(() => {
            console.log("image uploaded, imageRef");
        })
    };
    //TODO sort uploads for edited images
    //TODO click() event on fragrances section on delete
    // firebase api delete call if a new image is uploaded on edit
    // firebase api delete call on deleted fragrance
    // fix refresh on single fragrance page
    //disallow users from making their own list item section (programatically create it)


    

    //TODO add form validation, remove list-form and auto generate it from other fields -or- use ID for endpoints
    // Also, add success/fail toast
    return (
        <div className="AddFragrance">
            <h2>EDIT A FRAGRANCE</h2>
            <form className="addFragranceForm" onSubmit={axiosSubmit}>
                <div>
                    <input type="text" onChange={listNameUpdate} name="list_name" defaultValue={selectedFragrance.list_name} autoComplete="off" required></input>
                    <label>List Name</label>
                </div>
                <div>
                    <input type="text" onChange={displayNameUpdate} name="display_name" defaultValue={selectedFragrance.display_name} autoComplete="off" required></input>
                    <label>Display Name</label>
                </div>
                <div>
                    <input type="text" onChange={houseUpdate} name="house" defaultValue={selectedFragrance.house} autoComplete="off" required></input>
                    <label>House</label>
                </div>
                <div>
                    <input type="text" onChange={collectionUpdate} name="collection" defaultValue={selectedFragrance.collection} autoComplete="off" required></input>
                    <label>Collection</label>
                </div>
                <div>
                    <input type="text" onChange={releaseUpdate} name="release" defaultValue={selectedFragrance.release} autoComplete="off" required></input>
                    <label>Release Year</label>
                </div>
                <div>
                    <input type="text" onChange={notesUpdate} name="notes" defaultValue={selectedFragrance.notes} autoComplete="off" required></input>
                    <label>Notes</label>
                </div>
                <button type="reset">Reset</button>
                <button>Submit</button>
            </form>
            <button className="deleteFragranceButton" onClick={axiosDelete}>Delete Fragrance</button>
            <Button component={Link} to={`/fragrances/${selectedFragrance.list_name}`}>Back</Button>
            <div className="imageUpload">
                <input type="file" onChange={e => {setImageUpload(e.target.files[0])}} />
                <button onClick={uploadImage}>Upload Image</button>
            </div>
        
        </div>
    );
}

export default EditFragrance;
