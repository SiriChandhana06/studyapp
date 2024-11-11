
// import React, { useState } from 'react';
// import NavBar from './NavBar';
// import UserHome from "./UserHome"
// import { Container } from 'react-bootstrap';
// import AddCourse from '../user/teacher/AddCourse';

// const Dashboard = () => {
//    const [selectedComponent, setSelectedComponent] = useState('home');

//    const renderSelectedComponent = () => {
//       switch (selectedComponent) {
//          case 'home':
//             return <UserHome />
//          case 'addcourse':
//            return <AddCourse />
//          default:
//             return <UserHome />

//       }
//    };

//    return (
//       <>
//          <NavBar setSelectedComponent={setSelectedComponent} />
//          <Container className='my-3'>
//             {renderSelectedComponent()}
//          </Container>
//       </>
//    );
// };

// export default Dashboard;


import { useContext, useState } from 'react';
import NavBar from './NavBar';
import UserHome from "./UserHome"
import { Container } from 'react-bootstrap';
import AddCourse from '../User/Teacher/AddCourse';
import StudentHome from "../User/Student/StudentHome";
import AdminHome from '../Admin/AdminHome';
import { UserContext } from '../../App';
import EnrolledCourses from '../User/Student/EnrolledCourses';
import CourseContent from '../User/Student/CourseContent';
import AllCourses from '../admin/AllCourses';


const Dashboard = () => {
   const user = useContext(UserContext)
   const [selectedComponent, setSelectedComponent] = useState('home');

   const renderSelectedComponent = () => {
      switch (selectedComponent) {
         case 'home':
            return <UserHome />
         case 'addcourse':
            return <AddCourse />
         case 'enrolledcourese':
            return <EnrolledCourses />
         case 'cousreSection':
            return <CourseContent />
         case 'cousres':
            return <AllCourses />
         default:
            return <UserHome />

      }
   };
   return (
      <>
         <NavBar setSelectedComponent={setSelectedComponent} />
         <Container className='my-3'>
            {renderSelectedComponent()}
         </Container>
      </>
   );
};

export default Dashboard;