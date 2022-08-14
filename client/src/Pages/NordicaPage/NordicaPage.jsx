import { useState } from 'react'
import {Link} from 'react-router-dom'

const NordicaPage = () =>{

    const [nordica, setNordica] = useState([])

    const loadNordica = () =>{
        fetch('http://localhost:3001/api/mitologias')
        .then(res=>res.json())
        .then(allNordica =>setNordica(allNordica))
    }
    loadNordica ();
    return(
        <div>
            {nordica.map(nordic => {
                return(
                    <Link to={`/nordica/${nordic._id}`}>
                        {nordic.Titulo}
                    </Link>
                )
            })}
            <button type="button" className="btn btn-primary">Primary</button>
            <Link to="/"> ir al inicio</Link>
        </div>
    )
}

export default NordicaPage;