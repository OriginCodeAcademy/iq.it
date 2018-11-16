'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', (req, res) => {
    const user = {
      token: null,
      userId: null,
      admin: false
    }
    res.render('index', {user});
  });
  server.use(router);
};
