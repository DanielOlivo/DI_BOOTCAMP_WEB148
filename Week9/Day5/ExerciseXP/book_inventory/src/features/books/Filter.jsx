import { useDispatch, useSelector } from "react-redux";
import { selectAllGenres } from "./bookSlice";
import { selectGenre, selectSelectedGenre } from "./bookSlice";


export default function Filter() {
    const allGenres = useSelector(selectAllGenres)
    const dispatch = useDispatch()

    return (
        <select
            onChange={(e) => {
                // console.log(e.target.value)
                dispatch(selectGenre(e.target.value))
            }} 
        >
            <option value='all'>--select genre--</option>
            {allGenres.map(genre => 
                <option value={genre}>{genre}</option>
            )}
        </select>
    )
}