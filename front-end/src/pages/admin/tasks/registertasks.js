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
  const [project, setProject] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [completed, setCompleted] = useState('');
 

  async  function handleSubmit(){
    const data = {title,
                  project,
                  assignedTo,
                completed}
    if (title !== '' && project !== '' && assignedTo!== ''  && completed!== ''){
      const response = await api.post('/tasks', data)
      if (response.status === 200) {
        window.location.href = '/admin/tasks/register'
      }else{
        alert('Erro ao cadastrar a tarefa')
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
                          id="project"
                          name="project"
                          label="Projeto"
                          fullWidth
                          autoComplete="project"
                          variant="standard"
                          value= {project}
                          onChange={ e=> setProject(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="assignedTo"
                          name="assignedTo"
                          label="Atribuído para"
                          fullWidth
                          autoComplete="assignedTo"
                          variant="standard"
                          value= {assignedTo}
                          onChange={ e=> setAssignedTo(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="completed"
                          name="completed"
                          label="completar para"
                          fullWidth
                          autoComplete="completed"
                          variant="standard"
                          value= {completed}
                          onChange={ e=>  setCompleted(e.target.value)}
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