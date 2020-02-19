/*
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key &#x60;special-key&#x60; to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 4.3.0-SNAPSHOT
 */


import http from "k6/http";
import { group, check, sleep } from "k6";

const BASE_URL = "http://petstore.swagger.io/v2";
// Sleep duration between successive requests.
// You might want to edit the value of this variable or remove calls to the sleep function on the script.
const SLEEP_DURATION = 0.1;
// Global variables should be initialized.
let api_key = "TODO_EDIT_THE_API_KEY";

export default function() {
    group("/pet", () => {
        let url = BASE_URL + `/pet`;
        // Request No. 1
        // TODO: edit the parameters of the request body.
        let body = {"id": "long", "category": {"id": "long", "name": "string"}, "name": "string", "photoUrls": "list", "tags": [{"id": "long", "name": "string"}], "status": "string"};
        let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
        let request = http.put(url, body, params);
        sleep(SLEEP_DURATION);

        // Request No. 2
        // TODO: edit the parameters of the request body.
        body = {"id": "long", "category": {"id": "long", "name": "string"}, "name": "string", "photoUrls": "list", "tags": [{"id": "long", "name": "string"}], "status": "string"};
        params = {headers: {"Content-Type": "application/json"}};
        request = http.post(url, body, params);
        sleep(SLEEP_DURATION);
    });
    group("/pet/findByStatus", () => {
        let status = "TODO_EDIT_THE_STATUS";
        let url = BASE_URL + `/pet/findByStatus?status=${status}`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "successful operation": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);
    });
    group("/pet/findByTags", () => {
        let tags = "TODO_EDIT_THE_TAGS";
        let url = BASE_URL + `/pet/findByTags?tags=${tags}`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "successful operation": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);
    });
    group("/pet/{petId}", () => {
        let petId = "TODO_EDIT_THE_PETID";
        let url = BASE_URL + `/pet/${petId}`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "successful operation": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);

        // Request No. 2
        // TODO: edit the parameters of the request body.
        body = {"name": "string", "status": "string"};
        params = {headers: {"Content-Type": "application/x-www-form-urlencoded"}};
        request = http.post(url, body, params);
        sleep(SLEEP_DURATION);

        // Request No. 3
        params = {headers: {"api_key": `${api_key}`}};
        request = http.delete(url, params);
        sleep(SLEEP_DURATION);
    });
    group("/pet/{petId}/uploadImage", () => {
        let petId = "TODO_EDIT_THE_PETID";
        let url = BASE_URL + `/pet/${petId}/uploadImage`;
        // Request No. 1
        // TODO: edit the parameters of the request body.
        let body = {"additionalMetadata": "string", "file": http.file(open("/path/to/file.bin", "b"), "test.bin")};
        let params = {headers: {"Content-Type": "multipart/form-data", "Accept": "application/json"}};
        let request = http.post(url, body, params);
        check(request, {
            "successful operation": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);
    });
    group("/store/inventory", () => {
        let url = BASE_URL + `/store/inventory`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "successful operation": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);
    });
    group("/store/order", () => {
        let url = BASE_URL + `/store/order`;
        // Request No. 1
        // TODO: edit the parameters of the request body.
        let body = {"id": "long", "petId": "long", "quantity": "integer", "shipDate": "date", "status": "string", "complete": "boolean"};
        let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
        let request = http.post(url, body, params);
        check(request, {
            "successful operation": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);
    });
    group("/store/order/{orderId}", () => {
        let orderId = "TODO_EDIT_THE_ORDERID";
        let url = BASE_URL + `/store/order/${orderId}`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "successful operation": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);

        // Request No. 2
        request = http.delete(url);
        sleep(SLEEP_DURATION);
    });
    group("/user", () => {
        let url = BASE_URL + `/user`;
        // Request No. 1
        // TODO: edit the parameters of the request body.
        let body = {"id": "long", "username": "string", "firstName": "string", "lastName": "string", "email": "string", "password": "string", "phone": "string", "userStatus": "integer"};
        let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
        let request = http.post(url, body, params);
        check(request, {
            "successful operation": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);
    });
    group("/user/createWithArray", () => {
        let url = BASE_URL + `/user/createWithArray`;
        // Request No. 1
        let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
        let request = http.post(url, params);
        check(request, {
            "successful operation": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);
    });
    group("/user/createWithList", () => {
        let url = BASE_URL + `/user/createWithList`;
        // Request No. 1
        let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
        let request = http.post(url, params);
        check(request, {
            "successful operation": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);
    });
    group("/user/login", () => {
        let password = "TODO_EDIT_THE_PASSWORD";
        let username = "TODO_EDIT_THE_USERNAME";
        let url = BASE_URL + `/user/login?username=${username}&password=${password}`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "successful operation": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);
    });
    group("/user/logout", () => {
        let url = BASE_URL + `/user/logout`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "successful operation": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);
    });
    group("/user/{username}", () => {
        let username = "TODO_EDIT_THE_USERNAME";
        let url = BASE_URL + `/user/${username}`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "successful operation": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);

        // Request No. 2
        // TODO: edit the parameters of the request body.
        body = {"id": "long", "username": "string", "firstName": "string", "lastName": "string", "email": "string", "password": "string", "phone": "string", "userStatus": "integer"};
        params = {headers: {"Content-Type": "application/json"}};
        request = http.put(url, body, params);
        sleep(SLEEP_DURATION);

        // Request No. 3
        request = http.delete(url);
        sleep(SLEEP_DURATION);
    });
}