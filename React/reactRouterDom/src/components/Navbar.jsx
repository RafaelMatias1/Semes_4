import { Link } from 'react-router-dom'

import React from 'react'

function Navbar(){
    return(

        <nav>
            <Link to="/">Home</Link>
            <Link to="/Cadastro">Cadastro</Link>
            <Link to="/Denuncia">Denuncia</Link>
        </nav>

    )
}
export default Navbar