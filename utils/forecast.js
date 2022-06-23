const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=a5d7b016db64eabb6e30f2557a0e1e80&query=" +
    latitude +
    "," +
    longitude;
  //  +
  // "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to remote server!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const currTemp = body.current.temperature;
      const appTemp = body.current.feelslike;
      callback(undefined, `It is ${currTemp}C , and feels like ${appTemp}C`);
    }
  });
};

module.exports = forecast;
