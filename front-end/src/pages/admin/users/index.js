import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Chip from '@mui/material/Chip';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Copyright from '../../../components/admin-footer';
import MenuAdmin from '../../../components/menu-admin';
import api from '../../../services/api';



const mdTheme = createTheme();

function ListUsers() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsuarios(){
      const response = await api.get("/user");
      setUsers(response.data);
    }
    loadUsuarios();
  },[]);

  async function handleDelete(id){
    if (window.confirm('Excluir Este Usuário?')){
      var result = await api.delete('/user'+id);
      if (result.status === 200){
        window.location.href = '/admin/users';
      }else{
        alert('Ocorreu um erro! Tente Novamente');
      }
    }
  }
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <MenuAdmin title={"USERS"} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
              <Grid container spacing={1} padding={3}>
                <Grid item sm={12}>
                  <Paper  >
                    <Grid container spacing={1}  padding={3}>
                      <Grid item sm={12}>
                          <h2>List Users</h2>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                      <TableContainer component={Paper}>
                          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                              <TableRow>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">BirthDate</TableCell>
                                <TableCell align="center"> Address</TableCell>
                               <TableCell align="center">Type</TableCell>
                                <TableCell align="center">Data create</TableCell>
                                <TableCell align="center">Option</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {users.map((row) => (
                                <TableRow
                                  key={row._id}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                  <TableCell component="th" scope="row">
                                    {row.name}
                                  </TableCell>
                                  <TableCell align="left">{row.email}</TableCell>
                                  <TableCell align="center">{row.type===1?<Chip label="Admin" color="primary" />:<Chip label="User" color="secondary" />}</TableCell>
                                  <TableCell align="center">{new Date(row.createdAt).toLocaleString('pt-br')}</TableCell>
                                  <TableCell align="center">
                                    <ButtonGroup aria-label="outlined small button group">
                                      <Button color="primary" href={"/admin/usuarios/editar/"+row._id}>Atualizar</Button>
                                      <Button color="secondary" onClick={()=> handleDelete(row._id)}>Excluir</Button>
                                    </ButtonGroup>
                              
                                  </TableCell>
                                </TableRow>
                              ))} 
                              </TableBody> 
                          </Table>
                        </TableContainer>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <ListUsers />;
}