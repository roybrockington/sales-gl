import { ScatterplotLayer } from "@deck.gl/layers";
import { HexagonLayer } from "@deck.gl/aggregation-layers"
import salesData from '../assets/sales.json'

type Sale = {
    value: number
    company: string
    id: string
    longitude: number
    latitude: number
}

export const Scatter = () => new ScatterplotLayer({
    id: 'scatter',
    data: salesData,
    getPosition: d => [d.longitude, d.latitude],
    getFillColor: d => d.value > 100000 ? [200, 0, 40, 150] : [255, 140, 0, 100],
    getRadius: 8000,
    pickable: true,
})

export const Hexagon = () => new HexagonLayer({
    id: 'HexagonLayer',
    data: salesData,
    extruded: true,
    getPosition: d => [(d as Sale).longitude, (d as any).latitude],
    getElevationWeight: d => (d as Sale).value,
    elevationScale: 100,
    radius: 8000,
    pickable: true
})
