const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("HEY");
    } else {
      reject("UPS :( ");
    }
  });
};

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("UPS :(");
      reject(error);
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

Promise.all([somethingWillHappen, somethingWillHappen2])
  .then((response) => console.log("Array of results", response))
  .catch((error) => console.error(error));
