function greet(): void {
  console.log("hello world"!);
}

async function promiseToGreet(): Promise<void> {
  console.log("hello world"!);
}

async function promiseToAdd(a: number, b: number) {
  console.log('chaning async functions')
  return a + b;
}

//greet();
// promiseToGreet()
// greet().then(() => console.log("CANNOT do this"));
// promiseToGreet().then(() => console.log("CAN do this"));

promiseToGreet().then(() => promiseToAdd(5,4) )
