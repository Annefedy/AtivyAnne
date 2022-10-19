module.exports = app => {
    app.post('/create', app.app.controllers.user.create)
    app.get('/details/:_id', app.app.controllers.user.details)
    app.get('/index',  app.app.controllers.user.index);
    app.delete('/deletar:_id', app.app.controllers.user.deletar)
    app.post('/register', app.app.controllers.user.register)
    app.post('/auth', app.app.controllers.user.auth)
    app.post('/auth/forgot_password', app.app.controllers.user.forgotPassword)
    app.post('/auth/reset_password', app.app.controllers.user.resetPassword)

    app.post('/tasks', app.app.controllers.task.create);
    app.get('/tasks',  app.app.controllers.task.index);
    app.get('/tasks.detalhes/:_id', app.app.controllers.task.detalhes)
    app.delete('/tasks/:_id',  app.app.controllers.task.deletar)
    app.put('/tasks',  app.app.controllers.task.update)
  
    app.route('/user')
      .all(app.app.middlewares.authToken.authenticationJWT)
      .get(app.app.controllers.user.userProfile)
  
    app.route('/projects')
      .all(app.app.middlewares.authToken.authenticationJWT)
      .post(app.app.controllers.project.createProject)
      .get(app.app.controllers.project.getProject)
  
    app.route('/projects/:projectId')
      .all(app.app.middlewares.authToken.authenticationJWT)
      .get(app.app.controllers.project.getProjectById)
      .delete(app.app.controllers.project.removeProject)
      .put(app.app.controllers.project.updateProject)
  }