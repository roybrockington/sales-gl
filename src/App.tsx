import './App.css'
import Deck from './components/deckgl'
import sales from './assets/sales.json'

type Sales = {
    id: string
    company: string
    value: number
    longitude: number
    latitude: number
}

const App = () => {

    return (
            <Deck data={sales} />
    )
}

export default App
