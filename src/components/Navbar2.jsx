
// import React, { Component } from "react";
// import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
// // import { connect } from 'react-redux';
// import { Link } from "react-router-dom";
// // import { logoutauthenticateduser } from '../redux/Actions'

// class Navigation extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }
//   render() {
//     return (
//       <>
//         <Navbar bg="light" expand={false}>
//           <Container fluid>
//             <Navbar.Toggle aria-controls="offcanvasNavbar" />
//             <Navbar.Brand style={{ color: "#78909C" }}>Gully Cricket</Navbar.Brand>

//             <Navbar.Offcanvas
//               id="offcanvasNavbar"
//               aria-labelledby="offcanvasNavbarLabel"
//               placement="start"
//             >
             
//               <Offcanvas.Body>
               
//                   <Nav className="justify-content-end flex-grow-1 pe-3">
//                     <Link to='/login' style={{ color: "#78909C", textDecoration: "none", marginBottom: "18px" }}><i className="fas fa-sign-in-alt"></i>&nbsp;&nbsp;&nbsp;Login</Link>
//                     <Link to='/signup' style={{ color: "#78909C", textDecoration: "none", marginBottom: "18px" }}><i className="fas fa-user-plus"></i>&nbsp;&nbsp;&nbsp;Signup</Link>
//                     <Link to='/aboutus' style={{ color: "#78909C", textDecoration: "none", marginBottom: "18px" }}><i className="fas fa-magic"></i>&nbsp;&nbsp;&nbsp;About us</Link>
//                     <Link to='/' style={{ color: "#78909C", textDecoration: "none", marginBottom: "18px" }}><i className="fas fa-igloo" ></i>&nbsp;&nbsp;&nbsp;Home</Link>
//                     <Link to='/addmatch' style={{ color: "#78909C", textDecoration: "none", marginBottom: "18px" }}><i className="fas fa-swatchbook"></i>&nbsp;&nbsp;&nbsp;Add match</Link>
//                   </Nav>
                
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       </>
//     );
//   }
// }



// export default Navigation;