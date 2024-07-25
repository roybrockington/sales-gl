import { ScatterplotLayer } from "@deck.gl/layers"
import { HexagonLayer } from "@deck.gl/aggregation-layers"
import salesData from '../assets/sales.json'
import { useSelector } from "react-redux"
import { RootState } from "../assets/store"

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

export const Hexagon = () => {
    const filters = useSelector((state: RootState) => state.filter.filters)
    return new HexagonLayer({
        id: 'HexagonLayer',
        data: salesData.filter(x => filters.includes(x.division)),
        extruded: true,
        tilt: 400,
        getPosition: d => [(d as Sale).longitude, (d as Sale).latitude],
        getElevationWeight: d => (d as Sale).value * 4,
        elevationScale: 200,
        radius: 8000,
        pickable: true
    })
}
