const request = require("request");

const geoCode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiYW1hcnR5YTE0OSIsImEiOiJjbDQ4bWtuZGEwdHc3M2NtdzlkcHR5cmFrIn0.q_7D1W2n_RzCmeJ6CY7OQA";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to remote server!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search!", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
    // console.log(response.body.features.length);
  });
};

module.exports = geoCode;
