let Logger = require('node-logentries');
const logger = Logger.logger({
  token: process.env.LOGENTRIES_TOKEN,
});

module.exports = logger;