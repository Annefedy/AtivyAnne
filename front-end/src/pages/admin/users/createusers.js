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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import api from '../../../services/api'
const mdTheme = createTheme();


 function CreateUsers() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [address, setAddress] = useState('');
  const [type, setType] = useState('');
  const [password, setPassword] = useState('');

  async  function handleSubmit(){
    const data = {name,
                  email,
                  birthDate,
                  address,
                  type,
                password}
    if (name !== '' && email !== '' && birthDate !== '' && address !== '' && type !== '' && password!== ''){
     


     try {
      await api.post('/create', data)
      window.location.href = '/admin/users'
     } catch (error) {
      alert('Erro ao cadastrar o usuário')
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
                          <h2>Cadastrar Usuário</h2>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="name"
                          name="name"
                          label="Nome"
                          fullWidth
                          autoComplete="name"
                          variant="standard"
                          value= {name}
                          onChange={ e=> setName(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="email"
                          name="email"
                          label="Email"
                          fullWidth
                          autoComplete="email"
                          variant="standard"
                          value= {email}
                          onChange={ e=> setEmail(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="birthDate"
                          name="birthDate"
                          label="Data de nascimento"
                          fullWidth
                          autoComplete="birthDate"
                          variant="standard"
                          type ="date"
                          value= {birthDate}
                          onChange={ e=> setBirthDate(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="address"
                          name="address"
                          label="Endereço"
                          fullWidth
                          autoComplete="address"
                          variant="standard"
                          value= {address}
                          onChange={ e=> setAddress(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl variant="standard" sx={{ m: 0, minWidth: 120, width:"100%" }}>
                          <InputLabel id="Labeltype">Tipo</InputLabel>
                          <Select
                            labelId="Labeltype"
                            id="type"
                            value= {type}
                            onChange={ e=> setType(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Admin</MenuItem>
                            <MenuItem value={2}>User</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          type="password"
                          id="password"
                          name="password"
                          label="Senha"
                          fullWidth
                          autoComplete="password"
                          variant="standard"
                          value= {password}
                          onChange={ e=> setPassword(e.target.value)}
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
  return <CreateUsers />;
}