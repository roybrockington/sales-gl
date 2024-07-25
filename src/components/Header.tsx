import { useSelector, useDispatch } from "react-redux"
import { amend } from "../assets/filterSlice"
import { AppDispatch, RootState } from "../assets/store"
import { getDivisions } from "../assets/filterSlice"

type FilterDisplay = {
    id: number
    name: string
}

const Header = () => {
    const filters = useSelector((state: RootState) => state.filter.filters)
    const dispatch = useDispatch<AppDispatch>()

    const filterList: FilterDisplay[] = []

    getDivisions.map((division) =>
        filterList.push({
            'id':division,
            'name':`Division ${division}`
        }
        ))

    return (
        <div className='header'>
            <h2>Sales-GL</h2>
            <div className="filters">
                {filterList.map(filter =>
                    <div key={filter.id}>
                        <input 
                            type="checkbox" 
                            value={filter.id} 
                            checked={filters.includes(filter.id)}
                            onChange={() => dispatch(amend(filter.id))}
                        />
                        {filter.name}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header
