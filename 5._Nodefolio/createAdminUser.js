import { connection } from "./database/connectSqlite.js";
import { hashPassword } from "./util/encryption.js";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const inquirer = require('inquirer');
inquirer
  .prompt([
    {
        type: 'input',
        name: 'username',
        message: "Username: ",
    },
    {
        type: 'password',
        name: 'password',
        message: "Password: ",
    }
  ])
  .then(async (answers) => {
    console.log(answers);
    await connection.run(`INSERT INTO admin (username, password) VALUES (?, ?)`, 
    [answers.username, await hashPassword(answers.password)]);
  });

