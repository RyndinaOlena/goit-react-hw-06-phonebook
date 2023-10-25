import { useState } from "react";
import { useEffect } from "react";
import { nanoid } from 'nanoid'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from '../redux/contactReducer'
import { selectContacts } from "redux/selectors";

import css from './style.module.css'
export const Form = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const dispatch = useDispatch();

    const contacts = useSelector(selectContacts)


    const setAddContacts = () => {
        if (contacts.find(contact => contact.name === name)) {
            return NotificationManager.warning(`${name} is already in contacts`, 'warning', 3000);

        }
        dispatch(setContacts({ name, number, id: nanoid() }))
    }


    const handeChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value)
                break;
            default:

        }
    }

    const handeSubmit = (event) => {
        event.preventDefault()
        if (number && name) {
            setAddContacts({ name, number })
            setName('')
            setNumber('')
        }
    }


    return (
        <>
            <form onSubmit={handeSubmit} >
                <label>
                    <span>Name</span>
                    <input className={css.list} onChange={handeChange} type="text" name="name" value={name} required />
                </label>
                <label>
                    <span>Number</span>
                    <input className={css.list} onChange={handeChange} type="tel" name="number" value={number} required />
                </label>
                <button className={css.btnAdd} onClick={handeSubmit} type="submit">Add contact</button>
            </form >

            <NotificationContainer />
        </>
    )
}


