import { useEffect, useState } from 'react'
import axiosInstance from '../../Common/AxiosInstance';
import { Link } from 'react-router-dom';
import { Button, styled, TableRow, TableHead, TableContainer, Paper, Table, TableBody, TableCell, tableCellClasses } from '@mui/material'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
   },
   [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
   },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
   '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
   },
   // hide last border
   '&:last-child td, &:last-child th': {
      border: 0,
   },
}));
const EnrolledCourses = () => {
   const [allEnrolledCourese, setAllEnrolledCourses] = useState([])

   const allCourses = async () => {
      try {
         const res = await axiosInstance.get('http://localhost:5000/api/user/getallcoursesuser', {
            headers: {
               "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
         })
         if (res.data.success) {
            setAllEnrolledCourses(res.data.data)
         }
         else {
            alert(res.data.message)
         }
      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      allCourses()
   }, [])
   return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
               <TableRow>
                  <StyledTableCell>Course ID</StyledTableCell>
                  <StyledTableCell align="left">Course Name</StyledTableCell>
                  <StyledTableCell align="left">Cousre Educator</StyledTableCell>
                  <StyledTableCell align="left">Course Category</StyledTableCell>
                  <StyledTableCell align="left">Action</StyledTableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {
                  allEnrolledCourese?.length > 0 ? (
                     allEnrolledCourese?.map((course) => (
                        <StyledTableRow key={course._id}>
                           <StyledTableCell component="th" scope="row">
                              {course._id}
                           </StyledTableCell>
                           <StyledTableCell component="th" scope="row">
                              {course.C_title}
                           </StyledTableCell>
                           <StyledTableCell component="th" scope="row">
                              {course.C_educator}
                           </StyledTableCell>
                           <StyledTableCell component="th" scope="row">
                              {course.C_categories}
                           </StyledTableCell>
                           <StyledTableCell component="th" scope="row">
                              <Link to={`/courseSection/${course._id}/${course.C_title}`}><Button size='small' variant="contained" color="success">Go To</Button></Link>
                           </StyledTableCell>
                        </StyledTableRow>
                     )))
                     :
                     (<p className='px-2'>yet to be enrolled courses</p>)
               }
            </TableBody>
         </Table>
      </TableContainer>
   )
}

export default EnrolledCourses