import React, { useEffect} from 'react';
// import axios from 'axios';
import { useParams, Link } from "react-router-dom";
// import { TempContext } from '../../App'
// import axios from "axios";

function SingleFragrance({ fragrancesList, setFragrancesList, selectedFragrance, setSelectedFragrance }) {

    //STATE
    // const [selectedFragrance, setSelectedFragrance] = useState("");
    // const passedFart = useContext(TempContext);

    //USEEFFECT
    useEffect(() => {
        findTargetFragrance(params.fragName);
    
        //Keep axios call option for case keeping the whole db in state is too expesnive
        // axios
        //     .get(`https://fragrapedia-be.herokuapp.com/api/fragrances/${params.fragName}`)
        //     .then((res) => {
        //         setSelectedFragrance(res.data[0]);
        //     }, []);
    });

    //HELPER FUNCTIONS
    let params = useParams();

    const findTargetFragrance = (target) => {
        setSelectedFragrance(fragrancesList.find( e => e.list_name === target));
    }

    

    return (
        <div className="SingleFragrance">
            <h2>A THING: {params.fragName}</h2>
            <h3>{selectedFragrance.display_name}</h3>
            <ul>
                <li>{selectedFragrance.list_name}</li>
                <li>{selectedFragrance.house}</li>
                {selectedFragrance.collection ? (<li>{selectedFragrance.collection}</li>) : <></>}
                <li>{selectedFragrance.release}</li>
                <li>{selectedFragrance.notes}</li>
                <li>{selectedFragrance.added}</li>
                {selectedFragrance.concentration ? (<li>{selectedFragrance.concentration}</li>) : <></>}

            </ul>
            {/* <h4>{passedFart}</h4> */}
            <Link to="/edit_fragrance">Edit Fragrance</Link>
        </div>
    );
}

export default SingleFragrance;
