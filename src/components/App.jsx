import { selectContacts } from 'redux/selectors';
import { Form } from "./ContactForm";
import { ContactsList } from "./ContactsList.jsx";
import { Filter } from "./Filter";
import { useSelector } from 'react-redux';

export default function App() {

  const contacts = useSelector(selectContacts)

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      {contacts.length > 0 && <Filter />}
      {contacts.length > 0 ? <ContactsList /> : <p>No contacts here yet</p>}
    </div >
  );
}


