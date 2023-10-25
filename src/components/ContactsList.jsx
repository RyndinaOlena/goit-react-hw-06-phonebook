import css from './style.module.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { setContactsDel } from '../redux/contactReducer'
import { selectFilter, selectContacts } from 'redux/selectors'

export const ContactsList = () => {
    const dispatch = useDispatch()
    const filter = useSelector(selectFilter)
    const contacts = useSelector(selectContacts)

    const handelDelete = (id) => {
        dispatch(setContactsDel(id))
    }

    const getFileredContacts = () => !filter ? contacts : contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))

    return <div>
        <ul  >{getFileredContacts().map(({ name, id, number }) => {
            return <li className={css.item} key={id}>{name} : {number}<button className={css.btnAdd} onClick={(() => handelDelete(id))}>Delete &times;</button> </li>

        })}</ul>
    </div>;
}
