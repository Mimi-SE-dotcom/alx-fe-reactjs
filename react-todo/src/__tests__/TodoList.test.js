import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a project")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText("New todo"), {
    target: { value: "Write tests" },
  });
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("Write tests")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  const deleteButton = screen.getAllByText("Delete")[0];
  fireEvent.click(deleteButton);
  expect(todo).not.toBeInTheDocument();
});