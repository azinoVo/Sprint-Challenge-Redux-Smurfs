import React from 'react';

function Smurf(props) {
    return (
        <div>
            <h3>{props.smurf.name}</h3>
            <p>Age: {props.smurf.age}, Height: {props.smurf.height}</p>
        </div>
    );
}

export default Smurf;