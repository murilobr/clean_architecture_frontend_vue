import TodosGateway from "./TodosGateway";
import axios from "axios";

export default class TodosGatewayHttp implements TodosGateway {
  async getTodos(): Promise<any> {
    const response = await axios.get("http://localhost:3000/todos");
    const todosData = response.data;
    return todosData;
  }
}