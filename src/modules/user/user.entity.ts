import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	CreateDateColumn,
	UpdateDateColumn,
	BeforeInsert,
} from "typeorm";
import * as argon2 from "argon2";

@Entity("users")
export default class User extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column("text")
	name: string;

	@Column("text", { unique: true, nullable: false })
	email: string;

	@Column("text")
	password: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@BeforeInsert()
	async hashPassword() {
		this.password = await argon2.hash(this.password);
	}
}
