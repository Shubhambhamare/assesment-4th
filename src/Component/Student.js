import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';


function Student() {

function createData(name, age, course, batch, change) {
  return { name, age, course, batch, change };
}

const rows = [
  createData('Ram', 20, 'mern', 'October',<NavLink to='#'>Edit</NavLink> ),
  createData('Ravi', 23, 'mern', 'July', <NavLink to='#'>Edit</NavLink>),
  createData('Shubham', 25, 'mern', 'September', <NavLink to='#'>Edit</NavLink>),
  createData('Akshay', 30, 'mern', 'August', <NavLink to='#'>Edit</NavLink>),
  createData('Gopi', 24, 'mern', 'December', <NavLink to='#'>Edit</NavLink>),
];


  return (
    <div>
    <h1 className='text'>Student Details</h1>
    <button className='click'>Add Student</button>
      <div className='box1'>        
      
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">{row.batch}</TableCell>
              <TableCell align="right">{row.change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
}

export default Student