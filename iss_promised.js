const request = require('request-promise-native');
const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
};
const fetchMyCoords = (ip) => {
  return request(`https://api.freegeoip.app/json/${ip}?apikey=26579b10-53fa-11ec-9d19-cfe39a07042d`);
};
const fetchFlyOver = (geo) => {
  geo = JSON.parse(geo);
  let lat = geo['latitude'];
  let lon = geo['longitude'];
  return request(`http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${lon}`);
};
const issSpoter = () => {
  fetchMyIP(fetchFlyOver)
    .then((ip) => {
      ip = JSON.parse(ip);
      ip = ip['ip'];
      return ip;
    })
    .then(fetchMyCoords)
    .then(fetchFlyOver)
    .then((flyz) => {
      console.log(flyz);
    });
};
issSpoter(); // Can export if need be