import {Link} from 'react-router-dom'

const NordicaPage = () =>{

    const loadNordica = () =>{
        fetch('http://localhost:3001/api/mitologias')
        .then(res=>res.json())
        .then(allNordica =>console.log(allNordica))
    }
    loadNordica ();
    return(
        <div>
                <button type="button" className="btn btn-primary">Primary</button>
            <Link to="/"> ir al inicio</Link>
        </div>
    )
}

export default NordicaPage;