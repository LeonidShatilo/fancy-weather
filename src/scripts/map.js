/* eslint-disable */
import { allData } from './data.js';

export let map;
export let marker;

export function changeLanguageOfMap() {
  const BE = 'be';
  const RU = 'ru';
  const LANG = allData.currentLanguage === BE ? RU : allData.currentLanguage;

  return new Promise((resolve) => {
    map.getStyle().layers.map((each) => {
      if (
        each.hasOwnProperty('layout') &&
        each.layout.hasOwnProperty('text-field')
      ) {
        if (!each.id.includes('road')) {
          map.setLayoutProperty(each.id, 'text-field', ['get', `name_${LANG}`]);
        }
      }
    });

    setTimeout(() => {
      resolve();
    }, 0);
  });
}

export function setMap(lat, lng) {
  const TOKEN =
    'pk.eyJ1Ijoic2hhdGlsb2xlb25pZCIsImEiOiJja2szdHIyaTcweDE5Mm9xb3YyZnJoYnNkIn0.ex05JiXyZjfejBymZpv-5A';

  return new Promise((resolve) => {
    mapboxgl.accessToken = TOKEN;

    map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 11,
    });

    marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);

    setTimeout(() => {
      resolve();
    }, 0);
  });
}

export function updateMap(lat, lng) {
  map.flyTo({
    center: [lng, lat],
    essential: true,
  });

  marker.remove();
  marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
}
