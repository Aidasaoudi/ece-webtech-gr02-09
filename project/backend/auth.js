import jwt from "jsonwebtoken";
import { app, credentials } from "./config.js";


const get_current_datetime = () => (new Date()).getTime();
export const get_expiry = (duration = app.token_duration, time = app.time.day) => get_current_datetime() + duration * time;

export function auth_token_validate(request, response, next, reply = true) {
	const token = request.headers["Authorization"];

	if (!token)
		return !(!reply || !response.reply(401, { error: "Token required" }));

	try {
		const { id, email, expiry } = jwt.verify(token, credentials.token_key);

		if (typeof expiry !== "number")
			throw new Error();

		if (get_current_datetime() > expiry)
			return !(!reply || !response.reply(401, { error: "Expired token" }));

		if (typeof id === "number")
			request.id = id;
		else if (typeof email === "string")
			request.email = email;

		if (next !== null)
			next();
	}
	catch (err) {
		return !(!reply || !response.reply(401, { error: "Invalid token" }));
	}
	return request.id;
}

export const auth_token_make = id => jwt.sign({ id: id, expiry: get_expiry() }, credentials.token_key, { algorithm: 'HS512' });