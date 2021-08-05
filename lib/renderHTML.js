const fs = require("fs")
const path = require("path")

const src = path.resolve(__dirname, "../src/")

const render = (employees) => {
  html = [];

  html.push(
    employees
      .filter((employees) => employees.getRole() === "Manager")
      .map((managers) => renderManager(managers))
  );

  html.push(
    employees
      .filter((employees) => employees.getRole() === "Engineer")
      .map((engineers) => renderEngineer(engineers))
  );

  html.push(
    employees
      .filter((employees) => employees.getRole() === "Intern")
      .map((interns) => renderIntern(interns))
  );

  return generateHTML(html.join(""))
};

const renderManager = (manager) => {
    let fileSync = fs.readFileSync(path.resolve(src, "Manager.html"), "utf-8");

    fileSync = changePlaceholders(fileSync, "name", manager.getName())
    fileSync = changePlaceholders(fileSync, "id", manager.getId())
    fileSync = changePlaceholders(fileSync, "email", manager.getEmail())
    fileSync = changePlaceholders(fileSync, "office", manager.getOffice())
    fileSync = changePlaceholders(fileSync, "role", manager.getRole())

    return fileSync;
}

const renderEngineer = (engineer) => {
    let fileSync = fs.readFileSync(path.resolve(src, "Engineer.html"), "utf-8");

    fileSync = changePlaceholders(fileSync, "name", engineer.getName())
    fileSync = changePlaceholders(fileSync, "id", engineer.getId())
    fileSync = changePlaceholders(fileSync, "email", engineer.getEmail())
    fileSync = changePlaceholders(fileSync, "github", engineer.getGithub())
    fileSync = changePlaceholders(fileSync, "role", engineer.getRole())

    return fileSync;
}

const renderIntern = (intern) => {
    let fileSync = fs.readFileSync(path.resolve(src, "Intern.html"), "utf-8");

    fileSync = changePlaceholders(fileSync, "name", intern.getName())
    fileSync = changePlaceholders(fileSync, "id", intern.getId())
    fileSync = changePlaceholders(fileSync, "email", intern.getEmail())
    fileSync = changePlaceholders(fileSync, "school", intern.getSchool())
    fileSync = changePlaceholders(fileSync, "role", intern.getRole())

    return fileSync;
}

const changePlaceholders = (readFile, placeholder, value) => {
    let replaceString = new RegExp("{{ " + placeholder + " }}", "gm")

    return readFile.replace(replaceString, value)
}

const generateHTML = (employeeCards) => {
    let fileSync = fs.readFileSync(path.resolve(src, "templatehelper.html"), "utf-8")

    return changePlaceholders(fileSync, "team", employeeCards)
}


module.exports = render;
