import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import './Nav.css';


function Nav() {
    return(
        <div className="Nav">
            <Link to="/">
                Back to Dog List
            </Link>
        </div>
    )
}

export default Nav;