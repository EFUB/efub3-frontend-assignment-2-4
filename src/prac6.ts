interface Todo {
	title: string;
	description: string;
	completed: boolean;
}

type TodoPreview1 = Pick<Todo, "title" | "completed">;

const todo1: TodoPreview1 = {
	title: "Clean room",
	completed: false,
};

console.log(todo1);
