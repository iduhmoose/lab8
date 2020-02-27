function initMap() {
  L.mapquest.key = 'caES7vFZiuvdY3iIXfNLszBfHW5f4Py5';

  // 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map('map', {
    center: [32.878992, -117.235698],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  L.marker([32.878992, -117.235698]).addTo(map);
}
