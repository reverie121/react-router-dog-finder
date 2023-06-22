import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import './DogDetails.css';


// Shows all of the info about a single dog.

function DogDetails( { dogs } ) {
    let { name } = useParams();
    let dog = dogs.filter(d => d.src === name)[0];
    return(
        <div className="DogDetails">
            <img src={`../images/${dog.src}.jpg`} alt={`${dog.name}`} />
            <div>
                <p>Name: {dog.name}</p>
                <p>Age: {dog.age}</p>
                <p>Facts:
                    <ul>
                        {dog.facts.map(f => <li key="f.id">{f}</li>)}
                    </ul>
                </p>
            </div>
        </div>
    )
}

export default DogDetails;