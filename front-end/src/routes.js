import React , {Component, Fragment} from 'react';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


     // IMPORTS ADMIN
import Dashboard from './pages/admin/dashboard';

import Projects from './pages/admin/projects';
import EditProjects from './pages/admin/projects/editprojects';
import RegisterProjects from './pages/admin/projects/registerprojects';

import Tasks from './pages/admin/tasks';
import EditTasks from './pages/admin/tasks/edittasks';
import RegisterTasks from './pages/admin/tasks/registertasks';

import Users from './pages/admin/users';
import EditUsers from './pages/admin/users/editusers';
import RegisterUsers from './pages/admin/users/registerusers';
import CreateUsers from './pages/admin/users/createusers'

import Login from './pages/admin/login';

// IMPORTS CLIENT
import Home from './pages/client/home';
import DetailsProjects from './pages/client/projects/projectsdetails'

export default class Routing extends Component {
    render(){
        return(
            <Router>
            <Fragment>
                <Routes>
        
            {/* ROTA CIENT*/}
            <Route exact path="/"   element={<Home/>} />
            <Route path="/projects/:idProject" element={<DetailsProjects/>} />

            {/* ROTA Admin*/}
            <Route path="/admin" element ={<Dashboard/>} />

            <Route path="/admin/projects" element ={<Projects/>} />
            <Route path="/admin/projects/register"  element={<RegisterProjects/>} />
            <Route path="/admin/projects/edit/:idProject" element={<EditProjects/>} />

            <Route path="/admin/tasks"  element={<Tasks/>} />
            <Route path="/admin/tasks/register"  element={<RegisterTasks/>} />
            <Route path="/admin/tasks/edit/:idTasks" element={<EditTasks/>} />

            <Route path="/admin/users"  element={<Users/>} />
            <Route path= "/admin/users/create" element={<CreateUsers />} />
            <Route path="/admin/users/register"  element={<RegisterUsers/>} />
            <Route path="/admin/users/edit/:idUser"  element={<EditUsers/>} />

            <Route path="/admin/login"  element={<Login />} />
            </Routes>
            </Fragment>
            </Router>
        );
    }
}