import Todo from "../src/entity/Todo";

test("should create a todo", function () {
  const todo = new Todo("A");
  expect(todo.description).toBe("A");
  expect(todo.done).toBeFalsy();
});

test("should create a todo toggle", function () {
  const todo = new Todo("A");
  todo.toggleDone();
  expect(todo.description).toBe("A");
  expect(todo.done).toBeTruthy();
});

test("should not create a todo with empty description", function () {
  expect(() => new Todo("")).toThrow(new Error("Invalid description"));
});
