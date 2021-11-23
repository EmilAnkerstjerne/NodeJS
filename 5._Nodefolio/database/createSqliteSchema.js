import { createConnection } from "./connectSqlite.js";

(async () => {
    const connection = await createConnection();

    await connection.exec("DROP TABLE IF EXISTS nodefolio");

    const projectsTableSchema = `
        CREATE TABLE projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            year INTEGER NOT NULL,
            category TEXT NOT NULL,
            technologies ARRAY NOT NULL,
            githubLink TEXT NOT NULL,
            deployedLink TEXT,
            description TEXT NOT NULL

        )
    `;

    await connection.exec("DROP TABLE IF EXISTS admin");

    const adminTableSchema = `
        CREATE TABLE admin (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            password TEXT NOT NULL
        )
    `;

    await connection.exec(projectsTableSchema);
    await connection.exec(adminTableSchema);
    
})() 