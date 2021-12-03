
/*const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});


fetchCoordsByIP('174.91.102.115', (error, data) => {
  
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);


});

fetchISSFlyOverTimes({ latitude: '43.693', longitude: '-79.8365' }, (error, data) => {

  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
  
});*/

const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass in passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});