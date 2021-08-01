const Employee = require("../lib/Employee");

test("creates a new employee object", () => {
  const employee = new Employee("Gary", 1, "test@email.com");

  expect(employee.name).toBe("Gary");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("gets employees name, id, email, role", () => {
  const employee = new Employee("Gary", 1, "test@email.com");

  expect(employee.getName()).toEqual(expect.any(String));
  expect(employee.getId()).toEqual(expect.any(Number));
  expect(employee.getEmail()).toEqual(expect.any(String));
  expect(employee.getRole()).toEqual("Employee");
});
