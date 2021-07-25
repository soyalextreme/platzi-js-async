let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const URI = "https://rickandmortyapi.com/api/character/";

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", urlApi, true);

  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error" + urlApi);
        return callback(error, null);
      }
    }
  };

  xhttp.send();
}

fetchData(URI, (error1, data1) => {
  if (error1) {
    return console.error(error1);
  }

  fetchData(URI + data1.results[0].id, (error2, data2) => {
    if (error2) {
      return console.log(error2);
    }

    fetchData(data2.origin.url, (error3, data3) => {
      if (error3) {
        return console.error(error3);
      }

      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});


const name = "Alejandro Andrade";
console.log(`Hola mi nombre es: ${name}`);
