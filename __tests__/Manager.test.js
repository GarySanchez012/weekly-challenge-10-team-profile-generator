const Manager = require("../lib/Manager")

test("checks to see if parent properties were inherited", () => {
    const manager = new Manager("Gary", 1, "test@email.com", 2);
  
    expect(manager.name).toStrictEqual(expect.any(String));
    expect(manager.id).toStrictEqual(expect.any(Number));
    expect(manager.email).toStrictEqual(expect.any(String));
  });

  test("checks if class Manager has new property and methods", () => {
    const manager = new Manager("Gary", 1, "test@email.com", 2);
  
    expect(manager.office).toStrictEqual(expect.any(Number));
  
    expect(manager.getRole()).toEqual("Manager");
  });
  