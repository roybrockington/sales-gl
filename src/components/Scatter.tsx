import { ScatterplotLayer } from "@deck.gl/layers";
import salesData from '../assets/sales.json'

const Scatter = () => new ScatterplotLayer({
    id: 'scatter',
    data: salesData,
    getPosition: d => [d.longitude, d.latitude],
    getFillColor: d => d.value > 100000 ? [200, 0, 40, 150] : [255, 140, 0, 100],
    getRadius: 8000,
})

export default Scatter
