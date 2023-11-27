import { useSearchParams } from "react-router-dom"
import Select from "./Select"

function SortBy({options}) {
    const [searchParams, setSearchParams] = useSearchParams();

    // get currently selected value
    const sortBy = searchParams.get('sortBy') || '';

    // check if element was clicked
    function handleChange(e) {
        searchParams.set('sortBy', e.target.value);
        setSearchParams(searchParams);
    }

    return (
        <Select 
            options={options} 
            type="white" 
            value={sortBy}
            onChange={handleChange} 
        />
    )
}

export default SortBy