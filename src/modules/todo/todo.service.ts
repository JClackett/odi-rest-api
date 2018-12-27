import { Service, Autowired } from "odi";
import { TodoRepository } from "./todo.repository";
import { TodoDTO } from "./todo.controller";

@Service()
export class TodoService {
	@Autowired()
	todoRep: TodoRepository;

	public async getTodos() {
		return await this.todoRep.findAll();
	}

	public async findTodo(id: string) {
		return await this.todoRep.findById(id);
	}

	public async createTodo(data: TodoDTO) {
		return await this.todoRep.createTodo(data);
	}

	public async updateTodo(id: string, data: TodoDTO) {
		return await this.todoRep.updateTodo(id, data);
	}
}
