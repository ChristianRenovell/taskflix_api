const logger = require('../utils/logger');
const tasks = {}

tasks.getTask = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) {
      logger.error(err);
      res.json(err);
    } 
    conn.query(`SELECT * FROM tasks T WHERE T.ID = ${req.params.id} AND T.ON_DELETE IS NULL`, (err, task) => {
      if (err){
        logger.error(err);
        res.json(err);
      }
      logger.info(JSON.stringify(task));
      res.send(task);
    })
  })
}

tasks.getUserTasks = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) res.json(err);
    conn.query(`SELECT 
                  T.id, 
                  T.type, 
                  T.priority, 
                  T.description 
                FROM tasks T WHERE T.USER_ID = ${req.params.user_id} AND T.ON_DELETE IS NULL`, (err, tasks) => {
      if (err) res.json(err);
      res.send(tasks);
    })
  })
}

tasks.saveTask = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) {
      logger.error(err);
      res.json(err);
    } 
    conn.query(`UPDATE tasks T SET ? WHERE T.ID = ?`, [req.body, req.params.id], (err, task) => {
      if (err) {
        logger.error(err);
        res.json(err);
      }
      logger.info(`Tarea ${req.params.id} guarda correctamente: ${JSON.stringify(task)}`)
      res.send(task);
    })
  })
}

tasks.newTask = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) res.status(500);
    conn.query(`INSERT INTO tasks SET ?`, req.body, (err, task) => {
      if (err){
        res.status(500);
        res.send(err)
      }
      res.send(task);
    })
  })
}

tasks.deleteTask = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) res.json(err);
      conn.query(`UPDATE tasks T SET T.ON_DELETE = curdate() WHERE T.ID = ${req.params.id}`, (err, response) => {
      console.log(response.affectedRows);
      if (err) res.json(err);
      if (response.affectedRows === 0) res.status(204).send('La tarea no existe');
      res.status(200).send('Tarea eliminada');
    })
  })
}

module.exports = tasks;