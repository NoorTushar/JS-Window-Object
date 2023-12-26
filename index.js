if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
  document.write("Geolocation is not supported by this browser");
}

function successCallback(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const altitude = position.coords.altitude;
  const speed = position.coords.speed;

  document.write(
    `Latitude: ${latitude}, Longitude: ${longitude}, Altidue: ${altitude}, Speed: ${speed}`
  );
}

function errorCallback(error) {
  document.write(`Geolocation error: ${error.message}`);
}
