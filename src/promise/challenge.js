const URI = "https://rickandmortyapi.com/api/character/";
const fetchDataPromises = require("../utils/fetchData");

fetchDataPromises(URI)
  .then((data) => {
    console.log(data.info.count);
    return fetchDataPromises(`${URI}${data.results[0].id}`);
  })
  .then((data) => {
    console.log(data.name);
    return fetchDataPromises(data.origin.url);
  })
  .then((data) => console.log(data.dimension))
  .catch((error) => console.error(error));
