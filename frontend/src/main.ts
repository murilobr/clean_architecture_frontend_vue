import { createApp } from "vue";
import App from "./App.vue";
import TodosGatewayHttp from "./infra/gateway/TodosGatewayHttp";
import "./style.css";

const app = createApp(App);
const todosGateway = new TodosGatewayHttp();
app.provide("todosGateway", todosGateway);
app.mount("#app");
