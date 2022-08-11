import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";
const API_KEY = "123asd456";

export function callAPI(path = "", method = "GET", data = {}, thenHook, errorHook) {
    const url = BASE_URL + path;
    const options = {
        method: method,
        headers: {
            "X-API-Key": API_KEY,
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        data: JSON.stringify(data),
        url
    };
    axios(options)
        .then((response) => thenHook(response))
        .catch((error) => errorHook(error))
};