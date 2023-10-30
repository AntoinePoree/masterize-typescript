// Tuple
let tuple: [number, boolean];
tuple = [999, true];
// Defaut du Tuple
tuple.push(4);
// -> [999, true, 4];
// Il autorise les push alors que le type est restrictif

// Enums
// const Roles = {
//   Javascript: 1,
//   Java: 2,
//   React: 3,
// };
// Peut devenir
enum Roles {
  Javascript,
  Java,
  React,
}

console.log(Roles);
// 0,1,2
