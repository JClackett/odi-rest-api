import { IController, Middleware } from "odi";
import { logUrl } from "../../lib/middleware/logger";

@Middleware(logUrl)
export class BaseController extends IController {
	public getSomeText() {
		return "Hello from the base controller";
	}
}
