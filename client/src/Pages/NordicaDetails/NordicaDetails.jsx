import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const NordicaDetails = () => {

    const {nordica_id} = useParams();
    const [nordica, setNordica] = useState({})
    const loadNordicaDetails = () =>{
        fetch(`http://localhost:3001/api/history/${nordica_id}`)
        .then(response => response.json())
        .then(nordica => setNordica(nordica))
    }

    loadNordicaDetails()

    return (
        <div>hola mundo {nordica.Titulo}</div>
    )
}
export default NordicaDetails;