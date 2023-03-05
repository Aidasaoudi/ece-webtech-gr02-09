import { SHA3 } from "sha3";
import { db } from "./db.js";
import { auth_token_make } from "./auth.js";


/*
 * @Parameters:
 * login: string
 * password: string
 * 
 * @Return:
 * token: string
 * language: string
 */
export async function sign_in(request, response) {
	if (!request.is_media_supported("application/json") || request.method !== "POST")
		return;

	const { body } = request;
	if (typeof body !== "object")
		return response.reply(400, { error: "One or several fields are missing" });

	const { login, password } = body;
	if (!login || !password)
		return response.reply(400, { error: "One or several fields are missing" });

	if (typeof login !== "string" || typeof password !== "string")
		return response.reply(400, { error: "One or several fields are unavailable" });

	const password_hash = new SHA3(512);
	password_hash.update(password);
	const profile = await db.collection("user").findOne({ email: login, password: password_hash.digest('hex') });
	if (profile == null)
		return response.reply(401, { error: "Invalid login or password" });

	response.reply(200, { token: auth_token_make(profile._id), lang: profile.language });
	return true;
}