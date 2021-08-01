const Engineer = require("../lib/Engineer");

test("checks to see if parent properties were inherited", () => {
  const engineer = new Engineer("Gary", 1, "test@email.com", "github");

  expect(engineer.name).toStrictEqual(expect.any(String));
  expect(engineer.id).toStrictEqual(expect.any(Number));
  expect(engineer.email).toStrictEqual(expect.any(String));
});

test("checks if class Engineer has new property and methods", () => {
  const engineer = new Engineer("Gary", 1, "test@email.com", "github");

  expect(engineer.github).toStrictEqual(expect.any(String));

  expect(engineer.getGithub()).toStrictEqual(expect.any(String));
  expect(engineer.getRole()).toEqual("Engineer");
});
