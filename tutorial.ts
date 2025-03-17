// TS SIMPLE TYPES - string, number, boolean
// declaring variable by initializing what type it is.(IMPLICIT TYPE)

// this is basically declaring a variable of type string
let boy: string = "manny";
// this is basically declaring a variable of type number
let sales: number = 123456789;
// this is basically declaring a variable of type boolean
let is_confirmed: boolean = true;
// but we don't always have to annotate our varaibles in TS, the compiler can infer(guess) or detect the type of
//variable based on the VALUE.

//EXPLICIT TYPE.... TS would guess(infer) thetype of value
let person = "manny";
let count = 7625252;
let is_available = false;

//TS SPECIAL TYPES - any,
// let level;
// level = 1;
// level = "a"; // using type any defeats the whole purpose of using TS, because we use TS to type safely and type-checking. so using type any disables this.
// BEST PRACTICE AVOID USING  TYPE ANY

// TS ARRAYS
let numbers: number[] = [];
numbers[0] = 1;
//numbers[1] = "2"; // Error.....  the value is a string

// code completion or intellisense
let goals: number[] = [];
//goals.forEach(n => n.) /// with this we can see all the properties of number objects because oue editor knows type of n it offers

const names: readonly string[] = ["Dylan"];
//names.push("Jack"); // the value of the array cannot be changed because of the readonly keyword

const boys: string[] = ["james", "ehis", "emmey", "quadri"];
boys.push("adonis");

//TS TUPLES
// a tuple is a fixed length array where each element has a particular type
let ourTuple: [string, boolean, number];
ourTuple = ["car", true, 20];
ourTuple.push(100);

//ENUMS
// an enum is a special "class" that represents a group of constants (unchangeable variables) could either be string or numbers

// Numeric Enums - Default... by default enums will initialize from 0 and add 1 to each additonal value
enum CardinalDirection {
  North,
  East,
  South,
  West,
}
let currentDirection = CardinalDirection.West;
// logs 3
console.log(currentDirection);
// throws error as 'North' is not a valid enum
//currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.

// Numeric Enums - initialized.... in this case, you can set the value of the first value of the numeric enum and have it autoincrease from there.
enum TitleContenders {
  Arsenal = 1,
  Liverpool,
  Bolton,
  Forest,
}
console.log(TitleContenders.Arsenal);
// 1
console.log(TitleContenders.Forest);
// 4

// Numeric Enums - Fully initialized ... in this case, each enum can have its seperate values
enum StatusCode {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
console.log(StatusCode.Success);
// 200

// STRING ENUMS.. enums can also contain strings, even more common than numeric enums, because of their readabilty and intent.
enum CardinalDirections {
  East = "East",
  West = "West",
  North = "North",
  South = "South",
}
console.log(CardinalDirections.East);

const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Small;
console.log(mySize); // 1

// Union Types... they are used when a value can be morethan a single type.propert could either be a string | number
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode("404");

// union type errors
function printStatusCodes(code: string | number) {
  // console.log(`My status code is ${code.toUpperCase()}.`); //error
  // property 'toUpperCase' does not exist ontype "string | number"
  // property 'toUpperCase' does not exist on type "number"
}
