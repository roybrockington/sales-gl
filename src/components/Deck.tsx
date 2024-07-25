import {useMemo, useEffect} from 'react'
import {APIProvider, Map, useMap} from '@vis.gl/react-google-maps'
import {DeckProps, PickingInfo} from '@deck.gl/core'
import {GoogleMapsOverlay} from '@deck.gl/google-maps'
import { Hexagon } from './Scatter'

const DeckGLOverlay = (props: DeckProps) => {
    const map = useMap()
    const overlay = useMemo(() => new GoogleMapsOverlay(props), [])
    useEffect(() => {
        overlay.setMap(map);
        return () => overlay.setMap(null);
    }, [map])

    overlay.setProps(props);
    return null;
}


const Deck = () => {
    let API_KEY = import.meta.env.VITE_REACT_API_GMAPS
    let MAP_ID = '7f459e2f2195760'

    const layers = [
        Hexagon()
    ];

    return <APIProvider apiKey={API_KEY}>
        <Map
            defaultCenter={{lat: 51.47, lng: 0.45}}
            defaultZoom={7}
            mapId={MAP_ID}
        >
            <DeckGLOverlay 
                layers={layers} 
                controller
                getTooltip={({object}: PickingInfo) => object && `Company: ${object.points[0].source.company}\n Sales: ${object.elevationValue}\n Division: ${object.points[0].source.division}`}
            />
        </Map>
    </APIProvider>
}

export default Deck
