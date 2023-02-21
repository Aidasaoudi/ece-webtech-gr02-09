import http from "http"
import { serverHandle } from "./handles.js";


http
.createServer(serverHandle)
.listen(8080)
