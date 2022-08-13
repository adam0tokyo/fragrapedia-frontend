// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from "react-router-dom";
// import { TempContext } from '../../App'
import axios from "axios";
import  { useState, useEffect } from 'react';
// import { storage } from '../firebase';
import { ref, getStorage, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';

function AddFragrance({ setFragrancesList, fragrancesList, selectedFragrance, setSelectedFragrance, updatePlease, setUpdatePlease }) {
    
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

    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);

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
        console.log("SHOW IT", newFragObj);
        await axios.post('https://fragrapedia-be.herokuapp.com/api/fragrances', newFragObj)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        setUpdatePlease(updatePlease += 1);
    }

    const storage = getStorage();
    

    const uploadImage = async () => {
        if (!imageUpload) return;
        console.log("uploading with ref", `images/${listName}`, "uploaded:", imageUpload);
        const imageRef = ref(storage, `images/${listName}`);
        uploadBytes(imageRef, imageUpload);
        // .then(() => {
        //     console.log("image uploaded", imageRef,getDownloadURL(imageRef));
        // })
        //this didn't work either..
        // .then((snapshot) => {
        //     snapshot.ref.getDownloadURL().then((url) => {
        //       console.log("downloadURL", url);
        //     });
        // });
    };

    
    // useEffect(() => {
    //     const imageListRef = ref(storage, "images/");
    //     listAll(imageListRef).then((res) => {
    //         console.log(res);
    //         res.items.forEach((i)=> {
    //             getDownloadURL(i).then((iURL) => {
    //                 setImageList((prev) => [...prev, iURL]);
    //             })
    //         })
    //     })
    // }, [])
    

    //TODO add form validation, remove list-form and auto generate it from other fields -or- use ID for endpoints
    return (
        <div className="AddFragrance">
            <h2>ADD A FRAGRANCE</h2>
            <form className="addFragranceForm" onSubmit={axiosSubmit}>
                <div>
                    <input type="text" onChange={listNameUpdate} name="list_name" required></input>
                    <label>List Name</label>
                </div>
                <div>
                    <input type="text" onChange={displayNameUpdate} name="display_name" required></input>
                    <label>Display Name</label>
                </div>
                <div>
                    <input type="text" onChange={houseUpdate} name="house" required></input>
                    <label>House</label>
                </div>
                <div>
                    <input type="text" onChange={collectionUpdate} name="collection" required></input>
                    <label>Collection</label>
                </div>
                <div>
                    <input type="text" onChange={releaseUpdate} name="release" required></input>
                    <label>Release Year</label>
                </div>
                <div>
                    <input type="text" onChange={notesUpdate} name="notes" required></input>
                    <label>Notes</label>
                </div>
                <button type="reset">Reset</button>
                <button>Submit</button>
            </form>
            <div className="imageUpload">
                <input type="file" onChange={e => {setImageUpload(e.target.files[0])}} />
                <button onClick={uploadImage}>Upload Image</button>
            </div>
            
        </div>
    );
}

export default AddFragrance;
