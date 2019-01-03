import "reflect-metadata";
import { Core } from "odi";
const port = 5000;
const sources = __dirname;

new Core({ server: { port }, sources, database: "ormconfig" }).listen(
	(err: any, url: string) => {
		if (err) throw err;
		console.log(`Server started on ${url} 🚀`);
	},
);
