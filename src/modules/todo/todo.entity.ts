import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	CreateDateColumn,
	UpdateDateColumn,
	BeforeInsert,
} from "typeorm";

@Entity("todos")
export default class Todo extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column("text")
	title: string;

	@Column("text", { unique: true, nullable: false })
	slug: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@BeforeInsert()
	createSlug() {
		this.slug = encodeURI(this.title);
	}
}
