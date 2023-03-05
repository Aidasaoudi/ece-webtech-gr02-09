#!/usr/bin/env node

import http from "http";
import express from "express";

import { auth_token_validate } from "./auth.js";
import { sign_in } from "./sign-in.js";
//import * as SignUp from "./sign-up.js";
//import * as Me from "./me/index.js";
import { init_db } from "./db.js";
import { __dirname, app as app_data, default_reply } from "./config.js";


(async () => {
	await init_db();
	console.log("Everything set");
})();

const app = express();

app.use(async (request, response, next) => {
	response.reply = function (code, body_json = null, headers = {}) {
		this.writeHead(code, { "Content-Type": "application/json", ...headers });
		this.end(JSON.stringify(body_json !== null ? body_json : default_reply[code]));
		return false;
	};
	response.method_not_allowed = function (methods) {
		methods = methods.join(", ");
		this.writeHead(405, { "Content-Type": "application/json", Allow: methods });
		this.end(JSON.stringify({ error: "Method not allowed. Allow: " + methods + "." }));
		return false;
	};
	request.response = response;
	request.is_media_supported = function (content_type) {
		return this.headers["content-type"] === content_type || this.response.reply(415, { error: "Unsupported Media Type. Expected '" + content_type + "', but got '" + this.headers["content-type"] + "'." });
	}
	if (request.headers["content-type"] === "application/json" && (request.method == 'POST' || request.method == 'PUT')) {
		request.body = '';
		request.on('data', data => request.body += data);
		await new Promise(r => request.on('end', r));
		try {
			request.body = JSON.parse(request.body);
		}
		catch (err) {
			return response.reply(400);
		}
	}
	next();
});

function recursive_sitemap(map, path = "") {
	const elements = Object.values(map); // Get all values function/null or object
	const methods = elements.filter(v => v === null || typeof v === "function");

	// One or several methods available
	if (methods.length > 0) {
		const allow = Object.keys(map).filter(v => v[0] !== '/');
		app.all(path, (request, response) => {
			if (allow.includes(request.method)) {
				if (map[request.method] === null)
					response.reply(501);
				else
					map[request.method](request, response);
			}
			else
				response.method_not_allowed(allow);
		});
	}
	for (const subpath in map) {
		if (map[subpath] !== null && typeof map[subpath] === "object")
			recursive_sitemap(map[subpath], path + subpath);
	}
}

const shared_resource = (arr, eq) => arr.reduce((prev, curr) => ({ ...prev, ['/' + curr]: eq }), {});


// NOT logged
const sitemap = {
	"/sign-in": {
		"POST": sign_in
	},
	"/sign-up": {
		"POST": null,//SignUp.request,
		"/resend": {
			"GET": null,//SignUp.resend_code
		},
		"/confirm": {
			"GET": null,//SignUp.confirm
		}
	},
	"/check/:key/:value": {
		"GET": null,//SignUp.available
	},
	"/change-email": {
		"GET": null,//Me.change_email_confirm
	},
	"/forgot-password": {
		"/send": {
			"POST": null,//Me.forgot_password
		},
		"/change": {
			"POST": null,//Me.forgot_password_change
		}
	},
	"/sitemap.xml": {
		"GET": null
	},
	...shared_resource(
		app_data.other_allowed_resources,
		{ "GET": (q, r) => r.download(__dirname + '/' + q._parsedUrl.pathname.split('/').pop()) }
	)
};

recursive_sitemap(sitemap);


// Logged
app.use(auth_token_validate);

const sitemap_logged = {
	"/me": {
		"/profile": {
			"GET": null,//Me.me,
			"PUT": null,//Me.profile_update,
			"/raw": {
				"GET": null,//Me.me_raw
			}
		}
	}
};

recursive_sitemap(sitemap_logged);


app.use((_, response) => response.reply(404));

const server = http.createServer(app);

server.listen(8080, () => console.log("API listening on port 8080"));
