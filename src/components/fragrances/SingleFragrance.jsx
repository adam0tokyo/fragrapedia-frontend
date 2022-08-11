import React, { useEffect} from 'react';
// import axios from 'axios';
import { useParams } from "react-router-dom";
// import { TempContext } from '../../App'
import axios from "axios";

function SingleFragrance({ fragrancesList, setFragrancesList, selectedFragrance, setSelectedFragrance }) {

    //STATE
    // const [selectedFragrance, setSelectedFragrance] = useState("");
    // const passedFart = useContext(TempContext);

    //USEEFFECT
    useEffect(() => {
        axios
            .get(`https://fragrapedia-be.herokuapp.com/api/fragrances/${params.fragName}`)
            .then((res) => {
                setSelectedFragrance(res.data[0]);
            }, []);
    });

    //HELPER FUNCTIONS
    let params = useParams();

    return (
        <div className="SingleFragrance">
            <h2>A THING: {params.fragName}</h2>
            <h3>{selectedFragrance.display_name}</h3>
            
            {/* <h4>{passedFart}</h4> */}
            
        </div>
    );
}

export default SingleFragrance;
