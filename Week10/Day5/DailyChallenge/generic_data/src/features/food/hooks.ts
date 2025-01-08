import { useDispatch, useSelector, useStore } from "react-redux";
import { RootState, AppStore } from "../../app/store";
import { fetchMeals } from "./foodSlice";
import type { AppDispatch } from "../../app/store";

// export const useAppDispatch = useDispatch.withTypes<AppDispatch>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = () => useSelector.withTypes<RootState>()
export const useAppStore = () => useStore.withTypes<AppStore>()

export const useItems = () => {
    const useSelector = useAppSelector()
    return useSelector(state => state.food.items)
}

export const useSearch = () => (arg: string) => {
    console.log('searching...')
    const dispatch = useAppDispatch()
    console.log('...dispatch...')
    dispatch(fetchMeals(arg))
}