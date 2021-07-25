let fetchData = require("../utils/fetchData");
const URI = "https://rickandmortyapi.com/api/character/";

const fetchDataAsync = async (urlApi) => {
  try {
    const dataGeneral = await fetchData(urlApi);
    const character = await fetchData(`${URI}${dataGeneral.results[0].id}`);
    const origin = await fetchData(character.origin.url);

    console.group("API INFO");
    console.log(dataGeneral.info.count);
    console.log(character.name);
    console.log(origin.dimension);
    console.groupEnd();
  } catch (error) {
    console.error(error);
  }
};

console.log("Before");
fetchDataAsync(URI);
console.log("After");
