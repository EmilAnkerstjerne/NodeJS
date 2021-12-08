import { connection } from "./database/connectSqlite.js";
import { hashPassword } from "./util/encryption.js";

// This File is for the developer to create an admin login.
// Fill the username and password below and run the file with 'node createAdminUser.js'
// Leave empty before pushing to GitHub

//For testing purposes: username = emil, password = 123

const username = "";
const password = "";

async function createAdminUser(){
    // console.log(await connection.run("SELECT * FROM projects"));
    await connection.run(`INSERT INTO admin (username, password) VALUES (?, ?)`, [username, await hashPassword(password)]);
}

setTimeout(createAdminUser, 1000);

