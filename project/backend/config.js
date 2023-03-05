import { fileURLToPath } from 'url';
import { dirname } from 'path';

import app from "./app.json" assert { type: "json"};
import credentials from "./credentials.json" assert { type: "json"};
import default_reply from "./http.json" assert { type: "json"};

export const __dirname = dirname(fileURLToPath(import.meta.url));

export { app, credentials, default_reply };
