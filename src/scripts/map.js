/* eslint-disable */

export let map;
export let marker;

export function setMap(lat, lng) {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic2hhdGlsb2xlb25pZCIsImEiOiJja2szdHIyaTcweDE5Mm9xb3YyZnJoYnNkIn0.ex05JiXyZjfejBymZpv-5A';
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: 11,
  });

  marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);

  return 'ok';
}

export function updateMap(lat, lng) {
  map.flyTo({
    center: [lng, lat],
    essential: true,
  });

  marker.remove();
  marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
}
