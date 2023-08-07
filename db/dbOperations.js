const config = require("./dbConfig.js");
const sqlServer = require("mssql");
async function getData() {
  let pool = await sqlServer.connect(config);
  let names = pool.request().query("SELECT * FROM NAMES");
  return names;
}
module.exports = { getData };
