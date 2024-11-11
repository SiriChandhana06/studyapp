import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import TeacherHome from '../User/Teacher/TeacherHome';
import AdminHome from '../Admin/AdminHome';
import StudentHome from '../User/Student/StudentHome';
// import axiosInstance from './AxiosInstance';

const UserHome = () => {
   const user = useContext(UserContext);
   let content;
   {
      switch (user.userData.type) {
         case "Teacher":
            content = <TeacherHome />
            break;
         case "Admin":
            content = <AdminHome />
            break;
         case "Student":
            content = <StudentHome />
            break;

         default:
            break;
      }
   }

   return (
      <Container>
         {content}
      </Container>
   );
};

export default UserHome;