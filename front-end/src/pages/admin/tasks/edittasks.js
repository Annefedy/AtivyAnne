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


 function RegisterProjects() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState('');
 

  async  function handleSubmit(){
    const data = {title,
                  description,
                  tasks}
    if (title !== '' && description !== '' && tasks!== ''){
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
        
        <MenuAdmin title={"Users"} />
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
                          <h2>Cadastrar Projetos</h2>
                      </Grid>
                      <Grid item xs={12} sm={12}>
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
                          id="description"
                          name="description"
                          label="Descrição"
                          fullWidth
                          autoComplete="description"
                          variant="standard"
                          value= {description}
                          onChange={ e=> setDescription(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="tasks"
                          name="tasks"
                          label="Tarefas"
                          fullWidth
                          autoComplete="tasks"
                          variant="standard"
                          value= {tasks}
                          onChange={ e=> setTasks(e.target.value)}
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
  return <RegisterProjects />;
}