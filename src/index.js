import "./styles.css";

const root = document.getElementById("app");
const toDoContainer = document.createElement("div");
toDoContainer.setAttribute("id", "toDoContainer");
var toDo = ["eat", "sleep", "walk"];

const checkItem = (labelText) => {
  const div = document.createElement("div");
  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("id", labelText);
  check.addEventListener("change", function (event) {
    console.log(event.target.id);
    toDo = toDo.filter((item) => item !== event.target.id);
    toDoContainer.innerHTML = "";
    toDoRender(toDo);
  });
  const label = document.createElement("label");
  label.textContent = labelText;
  label.setAttribute("for", labelText);
  div.appendChild(check);
  div.appendChild(label);
  return div;
};

const toDoRender = (toDo) => {
  toDo.forEach((item) => {
    toDoContainer.appendChild(checkItem(item));
  });
};

const input = document.createElement("input");
input.setAttribute("id", "input");
root.appendChild(input);
const button = document.createElement("button");
button.textContent = "Submit";
button.addEventListener("click", function () {
  toDo.push(document.getElementById("input").value);
  toDoContainer.innerHTML = "";
  toDoRender(toDo);
});
root.appendChild(button);
root.appendChild(toDoContainer);

toDoRender(toDo);
