function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    throw new Error("Both arguments must be numbers");
  }
}

let result1 = addSafe(10, 20); 
let result2 = addSafe(10, "20"); // Throws error

//Type Assertion
let result3 = add(10, <number>"20");