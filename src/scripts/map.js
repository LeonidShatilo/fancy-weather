/* eslint-disable */

import { allData } from './data.js';

export let map;
export let marker;

export function changeLanguageOfMap() {
  map.getStyle().layers.map((each) => {
    if (
      each.hasOwnProperty('layout') &&
      each.layout.hasOwnProperty('text-field')
    ) {
      if (!each.id.includes('road'))
        map.setLayoutProperty(each.id, 'text-field', [
          'get',
          `name_${allData.currentLanguage}`,
        ]);
    }
  });
}

export function setMap(lat, lng) {
  return new Promise((resolve) => {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoic2hhdGlsb2xlb25pZCIsImEiOiJja2szdHIyaTcweDE5Mm9xb3YyZnJoYnNkIn0.ex05JiXyZjfejBymZpv-5A';
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
