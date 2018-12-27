import Todo from "./todo.entity";
import { TodoDTO } from "./todo.controller";

export class TodoRepository {
	public async findAll() {
		const todos = await Todo.find();
		return todos;
	}

	public async findById(id: string) {
		const todo = await Todo.findOne(id);
		return todo;
	}

	public async createTodo(data: TodoDTO) {
		try {
			const todo = new Todo();
			todo.title = data.title;
			await todo.save();
			return todo;
		} catch (error) {
			throw new Error("Error creating todo");
		}
	}

	public async updateTodo(id: string, data: TodoDTO) {
		try {
			const todo = await Todo.findOne(id);
			if (!todo) throw new Error("Not found");
			todo.title = data.title;
			await todo.save();
			return todo;
		} catch (error) {
			throw new Error("Error updating todo");
		}
	}
}
