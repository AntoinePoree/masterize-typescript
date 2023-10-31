// In TypeScript, the Set is a new data structure introduced in ES6, similar to Map that allows us to store distinct values.
// It is similar to an array or a List but with the distinction that it doesn’t allow duplicate values.

// const directions = new Set<string>();
const directions = new Set<string>(["east", "west"]);

// Add, Retrieve and Delete Values from Set

// set.add(v) – adds the specified value to the Set.
// set.has(v) – checks the existence of the specified value in the Set.
// set.delete(v) – deletes the specified value from the Set.
// set.clear() – clears all the values from the Set.
// set.size – ‘size‘ property will return the size of Set.

// Create a Set
const diceEntries = new Set<number>();

// Add values
diceEntries.add(1);
diceEntries.add(2);
diceEntries.add(3);
diceEntries.add(4).add(5).add(6); // Chaining of add() method is allowed

// Check value is present or not
diceEntries.has(1); // true
diceEntries.has(10); // false

// Size of Set
diceEntries.size; // 6

// Delete a value from set
diceEntries.delete(6); // true

// Clear whole Set
diceEntries.clear(); // Clear all entries

// Iterating over a Set
let mySet = new Set<number>();

//Added 6 entries into the set
mySet.add(1).add(2).add(3).add(4).add(5).add(6);

// Iterate over set entries
for (let currentNumber of mySet) {
  console.log(currentNumber); // Prints 1 2 3 4 5 6
}

// Iterate set entries with forEach
mySet.forEach(function (value) {
  console.log(value); // Prints 1 2 3 4 5 6
});

mySet.forEach((value) => console.log(value)); // Prints 1 2 3 4 5 6

// If we want to use custom types or objects and store them in a Set, considered equal based on their content,
//  we must manage the comparison for equality, ourselves.
// Because the default equality in ES6 uses the object references,
// we must create a custom data structure that handles the desired object equality rules.

const numSet = new Set<number>();
numSet.add(1).add(2).add(2);
// '2' is added only once
console.log(numSet); //{1, 2}

// Maybe not a good approch
class SetWithContentEquality<T> {
  private items: T[] = [];
  private getKey: (item: T) => string;

  constructor(getKey: (item: T) => string) {
    this.getKey = getKey;
  }

  add(item: T): void {
    const key = this.getKey(item);
    if (!this.items.some((existing) => this.getKey(existing) === key)) {
      this.items.push(item);
    }
  }

  has(item: T): boolean {
    return this.items.some(
      (existing) => this.getKey(existing) === this.getKey(item)
    );
  }

  values(): T[] {
    return [...this.items];
  }
}

type Person = Record<string, string>;
// Compatre Person objects by their 'name' attribute
const personSet = new SetWithContentEquality<Person>((person) => person.name);

const john: Person = {
  name: "John",
};
const johnDuplicate: Person = {
  name: "John",
};

personSet.add(john);
personSet.add(johnDuplicate);

console.log(personSet.values()); // One object with content "John"
