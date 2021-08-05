const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employeeRoster = [];

const managerQuestions = [
  {
    type: "input",
    name: "managername",
    message: "What is your name?",
    validation: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a name!");

        return false;
      }
    },
  },
  {
    type: "number",
    name: "managerid",
    message: "What is your id number?",
    validation: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter your id number!");

        return false;
      }
    },
  },
  {
    type: "input",
    name: "manageremail",
    message: "What is your email?",
    validation: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email!");

        return false;
      }
    },
  },
  {
    type: "number",
    name: "manageroffice",
    message: "What is your office number?",
    validation: (officeInput) => {
      if (officeInput) {
        return true;
      } else {
        console.log("Please enter your office number!");

        return false;
      }
    },
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineername",
    message: "What is your name?",
    validation: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a name!");

        return false;
      }
    },
  },
  {
    type: "number",
    name: "engineerid",
    message: "What is your id number?",
    validation: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter your id number!");

        return false;
      }
    },
  },
  {
    type: "input",
    name: "engineeremail",
    message: "What is your email?",
    validation: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email!");

        return false;
      }
    },
  },
  {
    type: "input",
    name: "engineergithub",
    message: "What is your github username?",
    validation: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your github username!");

        return false;
      }
    },
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internname",
    message: "What is your name?",
    validation: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a name!");

        return false;
      }
    },
  },
  {
    type: "number",
    name: "internid",
    message: "What is your id number?",
    validation: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter your id number!");

        return false;
      }
    },
  },
  {
    type: "input",
    name: "internemail",
    message: "What is your email?",
    validation: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email!");

        return false;
      }
    },
  },
  {
    type: "input",
    name: "internschool",
    message: "What is your school?",
    validation: (officeInput) => {
      if (officeInput) {
        return true;
      } else {
        console.log("Please enter your school!");

        return false;
      }
    },
  },
];

const list = [
  {
    type: "list",
    name: "employeetype",
    message: "Would you like to add an(other) employee?",
    choices: ["Engineer", "Intern", "Exit"],
  },
];

const generalPrompt = () => {
  inquirer.prompt(list).then((answers) => {
    switch (answers.employeetype) {
      case "Engineer":
        engineerPrompt();
        break;
      case "Intern":
        internPrompt();
        break;
      case "Exit":
        generateFile();
    }
  });
};

const engineerPrompt = () => {
  inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
    employeeRoster.push(
      new Engineer(
        engineerAnswers.engineername,
        engineerAnswers.engineerid,
        engineerAnswers.engineeremail,
        engineerAnswers.engineergithub
      )
    );
    generalPrompt();
  });
};

const internPrompt = () => {
  inquirer.prompt(internQuestions).then((internAnswers) => {
    employeeRoster.push(
      new Intern(
        internAnswers.internname,
        internAnswers.internid,
        internAnswers.internemail,
        internAnswers.internschool
      )
    );
    generalPrompt();
  });
};

const generateFile = () => {
  fs.writeFile("./dist/index.html", render(employeeRoster), (err) => {
    if (err) throw err;
    console.log("File saved in distribution directory!")
  });
};

const mainPrompt = () => {
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    employeeRoster.push(
      new Manager(
        managerAnswers.managername,
        managerAnswers.managerid,
        managerAnswers.manageremail,
        managerAnswers.manageroffice
      )
    );
    generalPrompt();
  });
};

mainPrompt();
