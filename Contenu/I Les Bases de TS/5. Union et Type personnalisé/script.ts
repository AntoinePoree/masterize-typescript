let code: string | number | Function;

let arr: (boolean | number)[];
arr = [true, false, 999];

const foo = (param: string | number) => {
  console.log(param);
};
foo("yo");
foo(9);

// Types personalisé
type mixedType = string | number;
type booleanOrObject = boolean | Object;

const baz = (param: mixedType | booleanOrObject) => {
  console.log(param);
};
baz("oui");
baz(true);

type element = {
  x: number;
  y: number;
  id: mixedType;
  disabled: boolean;
};

const button = {
  x: 99,
  y: 788,
  id: 999,
  disabled: true,
};
