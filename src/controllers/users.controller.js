const jwt = require('../utils/jsonwebtoken');
const user = {}

user.login = ( req, res ) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    if(err) res.json(err);
    conn.query(`SELECT * FROM users U WHERE U.EMAIL = "${data.email}" AND U.PASSWORD = "${data.password}"`, (err, user) => {
      if(err) res.json(err);
      res.send(user);
    })
  })
}

user.registration = (req, res) => {
  const data = req.body;
  const payload = {
    name: data.name,
    email: data.email,
    password: data.password
  }
  //const token = jwt.generarToken(payload);
  const token = 'TODO implement Token';
  data.token = token;
  req.getConnection((err, conn) => {
    if (err) res.json(err);
    conn.query('INSERT INTO users SET ?', data, (err, user) => {
      if (err) res.json(err);
      res.send(user);
    })
  })
}

user.getProfile = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) res.json(err);
    conn.query(`SELECT * FROM users U WHERE U.USER_ID = ${req.params.id}`, (err, user) => {
      if (err) res.json(err);
      res.send(user);
    })
  })
}

user.saveProfile = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) res.json(err);
    conn.query('UPDATE users SET ? WHERE USER_ID = ?', [req.body, req.params.id], (err, user) => {
      if (err) res.json(err);
      res.send(user);
    });
  });
};

module.exports = user;