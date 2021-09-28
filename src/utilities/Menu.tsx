import { NavLink } from "react-router-dom";

const Menu = () => {

    const active = 'active';
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand" activeClassName= { active } >Movies App</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <NavLink className="nav-link"
                                activeClassName= { active }
                                to="/actors">
                                Actors
                            </NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-link"
                                activeClassName= { active }
                                to="/movies/create">
                                Create Movie
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu;