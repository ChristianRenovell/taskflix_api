const { createLogger, transports, format } = require('winston');

module.exports = createLogger({
  format: format.combine(
    format.simple(),
    format.timestamp(),
    format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`)
    ),
  transports: [
    new transports.Console({
      level: 'info'
    }),
    new transports.File({
      maxsize: 5000,
      maxFiles: 4,
      filename: `${__dirname}/../logs/log-api.log`
    })
  ],
})