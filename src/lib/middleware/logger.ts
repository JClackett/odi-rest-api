import { Request, Response } from "odi";

export const logUrl = (request: Request, _: Response, next: () => void) => {
	console.log(request.req.url);
	next();
};
