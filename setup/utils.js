const fs = require("fs");
const prompt = require("prompt-sync")();
const defaultData = require("./default");

function getEnv() {
  const DB_USER = prompt("DB User? ") || defaultData.DB_USER;
  const DB_PASSWORD = prompt("DB Password? ") || defaultData.DB_PASSWORD;
  const DB_NAME = prompt("DB Name? ") || defaultData.DB_NAME;
  const DB_PORT = prompt("DB Port? ") || defaultData.DB_PORT;

  return { DB_USER, DB_PASSWORD, DB_NAME, DB_PORT };
}

function writeEnv() {
  let editedString = "";
  const envData = getEnv();

  Object.entries(envData).forEach(([key, item]) => {
    editedString += `${key}="${item}"\n`;
  });

  fs.writeFileSync("./.env", editedString);
}

module.exports = { writeEnv };
