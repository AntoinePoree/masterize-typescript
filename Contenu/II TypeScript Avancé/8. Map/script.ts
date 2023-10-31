// The Map is a new data structure introduced in ES6 so it is available to JavaScript as well as TypeScript.
// A Map allows storing key-value pairs (i.e. entries), similar to the maps in other programming languages e.g. Java HashMap.
// As Map is a collection, meaning it has a size, and an order and we can iterate over its keys and values.

let myMap = new Map<string, number>();

let exempleMap = new Map<string, string>([
  ["key1", "value1"],
  ["key2", "value2"],
]);

// The common operations available in a Map are:

// map.set(key, value) – adds a new entry in the Map.
// map.get(key) – retrieves the value for a given key from the Map.
// map.has(key) – checks if a key is present in the Map. Returns true or false.
// map.size – returns the count of entries in the Map.
// map.delete(key) – deletes a key-value pair using its key. If key is found and deleted, it returns true, else returns false.
// map.clear() – deletes all entries from the Map.

let nameAgeMapping = new Map<string, number>();

//1. Add entries
nameAgeMapping.set("Lokesh", 37);
nameAgeMapping.set("Raj", 35);
nameAgeMapping.set("John", 40);

//2. Get entries
let age = nameAgeMapping.get("John"); // age = 40

//3. Check entry by Key
nameAgeMapping.has("Lokesh"); // true
nameAgeMapping.has("Brian"); // false

//4. Size of the Map
let count = nameAgeMapping.size; // count = 3

//5. Delete an entry
let isDeleted = nameAgeMapping.delete("Lokesh"); // isDeleted = true

//6. Clear whole Map
nameAgeMapping.clear(); //Clear all entries

// Iterating over Map
// The Map entries iterate in the insertion order. A for-each loop returns an array of [key, value] pairs for each iteration.

// Use 'for...of' loop to iterate over map keys, values, or entries.
// map.keys() – to iterate over map keys
// map.values() – to iterate over map values
// map.entries() – to iterate over map entries
// map – use object destructuring to iterate over map entries

//1. Iterate over map keys

for (let key of nameAgeMapping.keys()) {
  console.log(key); // Lokesh Raj John
}

//2. Iterate over map values
for (let value of nameAgeMapping.values()) {
  console.log(value); // 37 35 40
}

//3. Iterate over map entries
for (let entry of nameAgeMapping.entries()) {
  console.log(entry[0], entry[1]); // "Lokesh" 37 "Raj" 35 "John" 40
}

//4. Using object destructuring
for (let [key, value] of nameAgeMapping) {
  console.log(key, value); // "Lokesh" 37 "Raj" 35 "John" 40
}
