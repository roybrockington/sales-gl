import { ScatterplotLayer } from "@deck.gl/layers";
import salesData from '../assets/sales.example.json'

const Scatter = () => new ScatterplotLayer({
    id: 'scatter',
    data: salesData,
    opacity: 0.8,
    filled: true,
    radiusMinPixels: 5,
    radiusMaxPixels: 8,
    getPosition: d => [d.latitude, d.longitude],
    getFillColor: d => d.value > 100000 ? [200, 0, 40, 150] : [255, 140, 0, 100],
})

export default Scatter
