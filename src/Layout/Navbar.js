import {Link,NavLink} from "react-router-dom";

const Navbar = ()=>{
    return(
        
            <nav className="navbar navbar-expand-lg text-light navbar-light bg-dark">
                <div className="container-fluid">
                    <h1>Navbar</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" aria-current="page" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" exact to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" exact to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link className="btn btn-outline-light" to="/adduser">+ Add User</Link>
                </div>
            </nav>
        
    )
}

export default Navbar;