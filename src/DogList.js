import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import './DogList.css';

// Takes all the dog info from the props of <App />

function DogList( { dogs } ) {
    return(
        <div className="DogList">
            {dogs.map(d => 
                <div className="DogList" key={`${d.name}`}>
                    <Link to={`./dogs/${d.src}`}>
                        <img src={`../images/${d.src}.jpg`} alt={`${d.name}`} />
                    </Link>
                </div>
                )}
        </div>
    )
}

export default DogList;