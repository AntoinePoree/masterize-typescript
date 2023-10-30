// Partial

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

// Required
// Permet de rendre requis des variables optionels
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

// const obj2: Required<Props> = { a: 5 };
//   Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.

interface ITodo {
  title: string;
}

const todo: Readonly<ITodo> = {
  title: "Delete inactive users",
};

//   todo.title = "Hello";
//   Impossible to make an assignation
