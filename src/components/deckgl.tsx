import {Loader} from '@googlemaps/js-api-loader';
import {GoogleMapsOverlay} from '@deck.gl/google-maps';
import {ScatterplotLayer} from '@deck.gl/layers';

const loader = new Loader({apiKey: process.env.GMAPS});
const googlemaps = await loader.importLibrary('maps');

const map = new googlemaps.Map(document.getElementById('map'), {
  center: {lat: 51.47, lng: 0.45},
  zoom: 11,
  mapId: '<google_map_id>'
});

const overlay = new GoogleMapsOverlay({
  layers: [
    new ScatterplotLayer({
      id: 'deckgl-circle',
      data: [
        {position: [0.45, 51.47]}
      ],
      getPosition: d => d.position,
      getFillColor: [255, 0, 0, 100],
      getRadius: 1000
    })
  ]
});

overlay.setMap(map);


