const env = process.env.NODE_ENV || "development";

const database = {
	development: {
		type: "postgres",
		host: "localhost",
		port: 5432,
		username: "",
		password: "",
		database: "odi_development",
		synchronize: true,
		logging: false,
		entities: ["src/modules/**/*.entity.ts"],
	},
};

module.exports = database[env];
