// Type assertion
// let tex: string;
// tex = "trst";

// Assertion
// const form = document.querySelector("form")!;
// console.log(form.children);

// Type Casting
const form = document.querySelector("form") as HTMLFormElement;
const input = document.querySelector("input") as HTMLInputElement;

form.addEventListener("submit", handleSubmit);

function handleSubmit(event: Event) {
  event.preventDefault();
  console.log("SUBMIT");
}

window.addEventListener("click", handleClick);

function handleClick(event: MouseEvent) {
  console.log("SUBMIT", event.x, event.y);
}

const paragrapheList = document.querySelectorAll("p");
// paragrapheList sera toujours un tableau, sois vide, sois rempli de nos divs
