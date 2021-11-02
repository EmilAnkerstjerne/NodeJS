const fs = require("fs");

const navbar = fs.readFileSync("./public/components/nav/navbar.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

function createPage(path, options){
    return (navbar + fs.readFileSync(`./public/pages/${path}`).toString() + footer)
            .replace("%%DOCUMENT_TITLE%%", options?.title || "Nodefolio");
}

module.exports = {
    createPage
};