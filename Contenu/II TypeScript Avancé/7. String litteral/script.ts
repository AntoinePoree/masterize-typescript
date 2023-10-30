type A = "one" | "two";
type B = Uppercase<A>;

// let b: B = 'one' // Type '"one"' is not assignable to type '"ONE" | "TWO"'.

// In addition to Uppercase<StringType>, there are also the following helper types:

// Lowercase
// Capitalize
// Uncapitalize
// They can be used within a Template Literal Types, like below:

type Fruit = "Apple" | "Banana";
type FruitField = `fr_${Uncapitalize<Fruit>}`;

const fruits: Record<FruitField, boolean> = {
  fr_apple: true,
  fr_banana: false,
  // 'fr_Apple': true, // error
  // 'fr_peach': false // error
};

type FruitLower = Lowercase<Fruit>;
const fruitLower: FruitLower = "apple";
// const fruitLower2: FruitLower = "Apple"; // Error

type FruitCapitalize = Capitalize<Fruit>;
const fruitCapi: FruitCapitalize = "Apple";
// const fruitCapi2: FruitCapitalize = "apple"; // Error

type FruitUncapitalize = Uncapitalize<Fruit>;
const fruitUncap: FruitUncapitalize = "apple";
// const fruitUncap2: FruitUncapitalize = "Apple"; // Error
