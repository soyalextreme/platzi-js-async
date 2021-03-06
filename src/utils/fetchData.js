let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchDataPromises = (urlApi) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", urlApi, true);
    xhttp.onreadystatechange = (event) => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error", url_api));
      }
    };
    xhttp.send();
  });
};

module.exports = fetchDataPromises;
