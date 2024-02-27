var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from "node-fetch";
const routeHello = () => "Hello, new world!";
const routeAPINames = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data;
    try {
        const response = yield fetch(url);
        data = (yield response.json());
    }
    catch (err) {
        return "Error";
    }
    const names = data.map((item) => `id: ${item.id}, name: ${item.name}`).join("<br />");
    return names;
});
const routeWeather = (query) => queryWeatherData(query);
const queryWeatherData = (query) => {
    return {
        zipcode: query.zipcode,
        weather: "sunny",
        temp: 35
    };
};
export { routeHello, routeAPINames, routeWeather };
