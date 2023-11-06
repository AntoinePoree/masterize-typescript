import { TodoList } from "../components/TodoList.js";
import { fetchJson } from "./api.js";
import { createElement } from "./dom.js";

try {
  const todos = await fetchJson(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const list = new TodoList(todos);
  list.appendTo(document.querySelector("#todolist"));
} catch (error) {
  const alert = createElement("div", {
    class: "alert alert-danger m-2",
    role: "alert",
  });
  alert.innerText = "Impossible d'obtenir la todo list";
  document.body.prepend(alert);
  throw new Error(error);
}
