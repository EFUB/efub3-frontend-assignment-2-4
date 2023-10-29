interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview2 = Pick<Todo, "title" | "completed">;

const todo2: TodoPreview2 = {
  title: "Clean room",
  completed: false,
};

console.log(todo);
