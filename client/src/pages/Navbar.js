import React from 'react';
import{
     Link,NavLink
  }from 'react-router-dom';
const Navbar = ()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">Home</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName='active' to="/uploads">검색하기</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName='active' to="/registers">등록하기</NavLink>
                    </li>
     
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;