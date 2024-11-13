import { useContext } from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import { NavLink } from 'react-router-dom';

const NavBar = ({ setSelectedComponent }) => {

   const user = useContext(UserContext)

   if (!user) {
      return null
   }


   const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/";
   }
   const handleOptionClick = (component) => {
      setSelectedComponent(component);
   };

   return (
      <Navbar expand="lg" className="bg-body-tertiary">
         <Container fluid>
            <Navbar.Brand>
               <h3>Study App</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
               <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                  <NavLink onClick={() => handleOptionClick('home')}>Home</NavLink>
                  {user.userData.type === 'Teacher' && (
                     <NavLink onClick={() => handleOptionClick('addcourse')}>Add Course</NavLink>
                  )}
                  {user.userData.type === 'Admin' && (
                     <>
                        <NavLink onClick={() => handleOptionClick('cousres')}>Courses</NavLink>
                     </>
                  )}
                  {user.userData.type === 'Student' && (
                     <>
                        <NavLink onClick={() => handleOptionClick('enrolledcourese')}>Enrolled Courses</NavLink>
                     </>

                  )}
               </Nav>
               <Nav>
                  <h5 className='mx-3 mt-2'>Hi {user.userData.name}</h5>
                  <Button onClick={handleLogout} size='sm' variant='outline-danger'>Log Out</Button >
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default NavBar