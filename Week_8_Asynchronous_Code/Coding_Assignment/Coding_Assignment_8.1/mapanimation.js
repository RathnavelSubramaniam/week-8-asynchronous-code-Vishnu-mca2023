const busStops = [
    [77.13296717651211,11.026581623136467],
    [ 77.10222992634166,11.02189797674395],
    [77.09471208445791,11.018572271552697],
    [ 77.05143961748027,11.002836369306195],
    [ 77.02954742823833,11.000640519280665],
    [ 76.99581060438561,10.997217698848106],
    [ 76.98605272765018,11.012957078218836,],
    [76.9676474072616,11.017264329585002]
    
  ];
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2VudGhpbGt1cHB1c3dhbXkiLCJhIjoiY2twbTlkMzBlMDQxYjJ2bXcwcG5xdnhzNCJ9.mmPcPQN_3raRRh8Q0S1kEw';
    let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [77.13296717651211,11.026581623136467],
    zoom: 14,
  });  

  var marker= new mapboxgl.Marker()
            .setLngLat([76.9676474072616,11.017264329585002])
            .addTo(map);
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(()=> {
    if (counter>=busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
    },1000);
}

if (typeof module !== 'undefined') {
    module.exports = { move };
  }
