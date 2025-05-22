import { useEffect} from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import Contactlist from './components/Contactlist/Contactlist'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from './redux/contactsOps'
import { selectLoading, selectError } from './redux/contactsSlice'


function App() {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch])


  return (
    <>
    <h1>Phonebook</h1>
    <ContactForm />
    <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>Error:{ error }</p>}
    <Contactlist />
    </>
)
}

export default App
