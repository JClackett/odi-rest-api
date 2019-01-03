import { Service, Autowired } from "odi";
import { UserRepository } from "./user.repository";
import { UserDTO } from "./user.controller";

@Service()
export class UserService {
	@Autowired()
	userRep: UserRepository;

	public async getUsers() {
		return await this.userRep.findAll();
	}

	public async findUser(id: string) {
		return await this.userRep.findById(id);
	}

	public async createUser(data: UserDTO) {
		return await this.userRep.createUser(data);
	}

	public async updateUser(id: string, data: UserDTO) {
		return await this.userRep.updateUser(id, data);
	}
}
