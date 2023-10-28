interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview1 = Omit<Todo, "description">;

const todo1: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1304928340,
};

type TodoInfo = Omit<Todo, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};

console.log(todo);
console.log(todoInfo);
