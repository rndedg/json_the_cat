const request = require('request');
const breedType = process.argv.slice(2);
const breedFetcher = () => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${ breedType }`, (error, response, body) => {

    if (error) {
      console.log(error);
      return;
    }

    const data = JSON.parse(body);
    const breed = data[0];
    

    if (breed) {
      console.log(breed.description);
    } else {
      console.log(`${ breedType } not found.`);
    }


  });
};

breedFetcher();