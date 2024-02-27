var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { routeHello, routeAPINames, routeWeather } from "./route.js";
import express from "express";
import path from 'path';
const server = express();
const port = 3000;
server.get("/components/weather", function (req, res) {
    const filePath = path.join(process.cwd(), "public", "weather.html");
    res.setHeader("Content-Type", "text/html");
    res.sendFile(filePath);
    // res.send("test")
});
server.get("/hello", function (_req, res) {
    const response = routeHello();
    res.send(response);
});
server.get("/api/names", function (_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        try {
            response = yield routeAPINames();
            res.send(response);
        }
        catch (error) {
            console.log(error);
        }
    });
});
server.get("/api/weather/:zipcode", function (req, res) {
    const response = routeWeather({ zipcode: req.params.zipcode });
    res.send(response);
});
server.listen(port, function () {
    console.log('Listen on 3000');
});
