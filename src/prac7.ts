interface Todo {
	title: string;
	description: string;
	completed: boolean;
	createdAt: number;
}

type TodoPreview2 = Omit<Todo, "description">;

const todo2: TodoPreview2 = {
	title: "Clean room",
	completed: false,
	createdAt: 1304928340,
};

type TodoInfo = Omit<Todo, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
	title: "Pick up kids",
	description: "Kindergarten closes at 5pm",
};

console.log(todo2);
console.log(todoInfo);
