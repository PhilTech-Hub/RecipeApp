import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Image, Dropdown } from 'react-bootstrap';
// import defaultProfileImg from './default-profile-img.png'; // Placeholder image for initial profile picture

function CustomNavbar() {
    const [username] = useState(''); // Example username
    const [country] = useState('Country'); // Example country
    // const [profileImg, setProfileImg] = useState(defaultProfileImg); // Example initial profile image

    // const handleProfileImgChange = (e) => {
    //     // Handle profile image change logic here
    //     // Example: setProfileImg(e.target.files[0]);
    // };

    // const renderInitialProfileImg = () => {
    //     const initials = username.charAt(0).toUpperCase();
    //     return (
    //         <div className="profile-img">
    //             <span>{initials}</span>
    //         </div>
    //     );
    // };

    return (
        <Navbar className='navbar' bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Unique Recipe
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/create-recipe">
                            Create Recipe
                        </Nav.Link>
                        <Nav.Link as={Link} to="/saved-recipe">
                            Saved Recipe
                        </Nav.Link>
                        <NavDropdown title="Continents Recipe" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/option1">
                                African Recipe
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/option2">
                                Asian Recipe
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/option3">
                                European Recipe
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/option4">
                                {/* Option 4 */}
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                                {/* {profileImg ? (
                                    <Image src={profileImg} roundedCircle className="profile-img" alt="Profile" />
                                ) : (
                                    renderInitialProfileImg()
                                )} */}
                                {username}
                                <hr className="my-1" />
                                {country}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <button className="btn btn-outline-success" type="submit">
                                        <Link to="/auth/register" className="text-white">
                                            Login/Register
                                        </Link>
                                    </button>
                                </Dropdown.Item>
                                <Dropdown.Item>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Navbar = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container">
//                 <div className="collapse navbar-collapse" id="navbarToggleDemo01">
//                     <Link className="navbar-brand" to="/">
//                         Food Recipe
//                     </Link>
//                     <ul className="navbar-nav ms me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <Link className="nav-link text-white" aria-current="page" to="/create-recipe">
//                                 Create
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link text-white" to="/saved-recipe">
//                                 Saved Recipe
//                             </Link>
//                         </li>
//                     </ul>
//                     {/* Uncomment and edit the following block if you need a dropdown menu */}
//                     {/* 
//                     <li className="nav-item dropdown">
//                         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                             Dropdown
//                         </a>
//                         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                             <li><a className="dropdown-item" href="#">Action</a></li>
//                             <li><a className="dropdown-item" href="#">Another action</a></li>
//                             <li><hr className="dropdown-divider"/></li>
//                             <li><a className="dropdown-item" href="#">Something else here</a></li>
//                         </ul>
//                     </li>
//                     */}
//                     {/* Uncomment and edit the following block if you need a search form */}
//                     {/* 
//                     <form className="d-flex">
//                         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                         <button className="btn btn-outline-success" type="submit">Search</button>
//                     </form>
//                     */}
//                     <button className="btn btn-outline-success" type="submit">
//                         <Link to="/auth/register" className="text-white">
//                             Login/Register
//                         </Link>
//                     </button>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;
