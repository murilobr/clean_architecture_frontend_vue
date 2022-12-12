import { createApp } from "vue";
import App from "./App.vue";
import TodosGatewayHttp from "./infra/gateway/TodosGatewayHttp";
import FetchAdapter from "./infra/http/FetchAdapter";
import "./style.css";

const app = createApp(App);
// const httpClient = new AxiosAdapter();
const httpClient = new FetchAdapter();
const baseUrl = "http://localhost:3000";
const todosGateway = new TodosGatewayHttp(httpClient, baseUrl);
app.provide("todosGateway", todosGateway);
app.mount("#app");
