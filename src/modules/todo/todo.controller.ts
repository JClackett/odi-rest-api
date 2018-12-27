import {
	Controller,
	Get,
	Data,
	MaxLength,
	RouteGet,
	NotFound,
	Autowired,
	RoutePost,
	BadRequest,
	RoutePatch,
} from "odi";
import { TodoService } from "./todo.service";
import { BaseController } from "../shared/baseController";

@Data()
export class TodoDTO {
	@MaxLength(80)
	title: string;
}

@Controller("/todos")
export default class TodoController extends BaseController {
	@Autowired()
	todoService: TodoService;

	@Get
	async index() {
		const todos = await this.todoService.getTodos();
		const text = this.getSomeText();
		return { todos, text };
	}

	@RouteGet("/{id}")
	async show(id: string) {
		try {
			const todo = await this.todoService.findTodo(id);
			if (!todo) return NotFound("todo not found");
			return { todo };
		} catch (error) {
			return BadRequest(error);
		}
	}

	@RoutePost("/")
	async addTodo(data: TodoDTO) {
		try {
			const todo = await this.todoService.createTodo(data);
			return { todo };
		} catch (error) {
			return BadRequest(error);
		}
	}

	@RoutePatch("/{id}")
	async updateTodo(data: TodoDTO) {
		const id = this.getParam("id");
		try {
			const todo = await this.todoService.updateTodo(id, data);
			return { todo };
		} catch (error) {
			return BadRequest(error);
		}
	}
}
