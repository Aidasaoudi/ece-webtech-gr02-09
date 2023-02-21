
import url from "url"
import qs from "querystring"


export const serverHandle = function (req, res) {
    const route = url.parse(req.url);
    const path = route.pathname;
    const params = qs.parse(route.query);

    switch(path) {
        case "/":
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write("Print your name:\r\nGET /hello?name=<your name here>");
            break;
        case "/hello":
            if(params.name === undefined) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.write("Hello");
            }
            else {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write("Hello "+params.name);
            }
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write("Not found");
            break;
    }
    
    res.end();
}