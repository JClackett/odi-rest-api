import User from "./user.entity";
import { UserDTO } from "./user.controller";

export class UserRepository {
	public async findAll() {
		const users = await User.find();
		return users;
	}

	public async findById(id: string) {
		const user = await User.findOne(id);
		return user;
	}

	public async createUser(data: UserDTO) {
		try {
			const user = new User();
			user.name = data.name;
			user.email = data.email;
			user.password = data.password;
			await user.save();
			return user;
		} catch (error) {
			throw new Error("Error creating user");
		}
	}

	public async updateUser(id: string, data: UserDTO) {
		try {
			const user = await User.findOne(id);
			if (!user) throw new Error("Not found");
			await user.save();
			return user;
		} catch (error) {
			throw new Error("Error updating user");
		}
	}
}
