import * as React from 'react';
import {useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuAdmin from '../../../components/menu-admin';
import Copyright from '../../../components/admin-footer';
import Button from '@mui/material/Button';
import api from '../../../services/api'
const mdTheme = createTheme();


  
 function RegisterTasks() {
  const [title, setTitle] = useState('');
  const [name_project, setName_Project] = useState('');
  const [description, setDescription] = useState('');
 

  async  function handleSubmit(){
    const data = {title, 
      name_project, 
      description}
      if (title !== '' && name_project !== '' && description!== ''){
      const response = await api.post('/projects', data)
      if (response.status === 200) {
        window.location.href = '/admin/projects/register'
      }else{
        alert('Erro ao cadastrar o projeto')
      }
    }else{
      alert('Necessário preencher todos os dados!')
    }
    

  }
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        
        <MenuAdmin title={"Tasks"} />
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
                          <h2>Cadastrar Tarefas</h2>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="title"
                          name="title"
                          label="Título"
                          fullWidth
                          autoComplete="title"
                          variant="standard"
                          value= {title}
                          onChange={ e=> setTitle(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="name_project"
                          name="name_project"
                          label="Nome do Projeto"
                          fullWidth
                          autoComplete="name_project"
                          variant="standard"
                          value= {name_project}
                          onChange={ e=> setName_Project(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="description"
                          name="description"
                          label="Descrição do projeto"
                          fullWidth
                          autoComplete="description"
                          variant="standard"
                          value= {description}
                          onChange={ e=> setDescription(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <Button variant="contained" onClick={handleSubmit}>Salvar</Button>
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
  return <RegisterTasks />;
}