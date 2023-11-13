import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const enlaces = [
        "Firestone",
        "Bridgestone",
        "Goodyear",
        "Contacto",
        "Ubicacion"
    ]

    return (
        <div>
            <Link to={"/"}>
                <p>LOGO</p>
            </Link>
            
            <ul>
                {enlaces.map((e,id) => 
                    <li key={id}>
                        <Link to={`${e}`}>
                         {e}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Navbar;