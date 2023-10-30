function multiply(num1: number, num2 = 10, facultatif?: string): number {
  if (facultatif) console.log(facultatif);
  return num1 * num2;
}

multiply(1);

const foo = () => {};

// function signatures

let baz: (a: number, b: number) => number;
baz = (a, b) => a + b;

// Callbacks

function greetings(fn: (message: string) => void) {
  fn("Log this baby");
}

function printToConsole(message: string): void {
  console.log(message);
}

greetings(printToConsole);
