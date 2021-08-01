const Intern = require("../lib/Intern")

test("checks to see if parent properties were inherited", () => {
    const intern = new Intern("Gary", 1, "test@email.com", "school");
  
    expect(intern.name).toStrictEqual(expect.any(String));
    expect(intern.id).toStrictEqual(expect.any(Number));
    expect(intern.email).toStrictEqual(expect.any(String));
  });

  test("checks if class Intern has new property and methods", () => {
    const intern = new Intern("Gary", 1, "test@email.com", "school");
  
    expect(intern.school).toStrictEqual(expect.any(String));
  
    expect(intern.getSchool()).toStrictEqual(expect.any(String));
    expect(intern.getRole()).toEqual("Intern");
  });
  