import { Controller, Get } from "odi";

import { BaseController } from "../shared/base.controller";

@Controller()
export default class HomeController extends BaseController {
	@Get
	index() {
		return `Hello, from index!`;
	}

	@Get
	about() {
		return `Hello, from about!`;
	}
}
