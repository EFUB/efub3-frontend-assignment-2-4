interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1304928340,
};

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};

console.log(todo);
console.log(todoInfo);
