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
	IsEmail,
	MinLength,
} from "odi";
import { UserService } from "./user.service";
import { BaseController } from "../shared/base.controller";

@Data()
export class UserDTO {
	@MaxLength(80)
	name: string;

	@IsEmail()
	email: string;

	@MinLength(8)
	@MaxLength(80)
	password: string;
}

@Controller("/users")
export default class UserController extends BaseController {
	@Autowired()
	userService: UserService;

	@Get
	async index() {
		const users = await this.userService.getUsers();
		return { users };
	}

	@RouteGet("/{id}")
	async show(id: string) {
		try {
			const user = await this.userService.findUser(id);
			if (!user) return NotFound("user not found");
			return { user };
		} catch (error) {
			return BadRequest(error);
		}
	}

	@RoutePost("/")
	async addUser(data: UserDTO) {
		try {
			const user = await this.userService.createUser(data);
			return { user };
		} catch (error) {
			return BadRequest(error);
		}
	}

	@RoutePatch("/{id}")
	async updateUser(data: UserDTO) {
		const id = this.getParam("id");
		try {
			const user = await this.userService.updateUser(id, data);
			return { user };
		} catch (error) {
			return BadRequest(error);
		}
	}
}
