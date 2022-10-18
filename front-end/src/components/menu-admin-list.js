import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GradingIcon from '@mui/icons-material/Grading';
import TaskIcon from '@mui/icons-material/Task';
import PeopleIcon from '@material-ui/icons/People';
import ExitToApp from '@material-ui/icons/ExitToApp';


export const mainListItems = (
  <div>
    <ListItem button  component="a" href="/admin">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard"/>
    </ListItem>
    
     <ListItem button component="a" href="/admin/users" >
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
     
     <ListItem button component="a" href="/admin/projects" >
       <ListItemIcon>
        < GradingIcon/>
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>

    <ListItem button component="a" href="/admin/tasks" >
       <ListItemIcon>
      < TaskIcon />
      </ListItemIcon>
      <ListItemText primary="tasks" />
    </ListItem>
    
    
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Options</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <ExitToApp/>
      </ListItemIcon>
      <ListItemText primary="Log out" />
    </ListItem>
   
  </div>
);