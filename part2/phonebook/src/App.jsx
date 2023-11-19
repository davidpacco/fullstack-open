import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', phone: '040-123456' },
    { id: 2, name: 'Ada Lovelace', phone: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', phone: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)

  const handlePhoneChange = (event) => setNewPhone(event.target.value)

  const handleFilter = (event) => setFilter(event.target.value)

  const filteredPersons = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  const addPerson = (event) => {
    event.preventDefault()
    const alreadyExists = persons.find(person => person.name === newName)

    if (alreadyExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      id: persons.length + 1,
      name: newName,
      phone: newPhone
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewPhone('')
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilter={handleFilter} />

      <h2>Add a new</h2>

      <PersonForm
        name={newName}
        phone={newPhone}
        onNameChange={handleNameChange}
        onPhoneChange={handlePhoneChange}
        addPerson={addPerson}
      />

      <h2>Numbers</h2>

      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App