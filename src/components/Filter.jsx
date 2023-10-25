import css from './style.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setFilter } from 'redux/contactReducer'
import { selectFilter } from 'redux/selectors'

export const Filter = () => {
    const dispatch = useDispatch()

    const filter = useSelector(selectFilter)

    const handleChange = event => {
        dispatch(setFilter(event.target.value));
    };

    return <div><input className={css.list} value={filter} onChange={handleChange}></input></div >
}