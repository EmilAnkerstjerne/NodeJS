// const fs = require("fs");
import fs from "fs";

const navbar = fs.readFileSync("./public/components/nav/navbar.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

export function createPage(path, options){
    return (navbar + fs.readFileSync(`./public/pages/${path}`).toString() + footer)
            .replace("%%DOCUMENT_TITLE%%", options?.title || "Nodefolio")
            .replace("%%PROJECT_ID%%", options?.projectId || "");
}

export function createPageNoNav(path, options){
    return fs.readFileSync(`./public/pages/${path}`).toString();
}

// module.exports = {
//     createPage
// };
