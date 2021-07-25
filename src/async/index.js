const doSomething = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Do something async"), 3000)
      : reject(new Error("Error random"));
  });
};

// bad practice to do not handle the error
const doSomethingAsync = async () => {
  const something = await doSomething();
  console.log(something);
};

// good practice always to handle the error
const mainHandler = async () => {
  try {
    const something = await doSomething();
    console.log(something);
  } catch (error) {
    console.error(error);
  }
};

console.log("Before");
mainHandler();
console.log("After");
