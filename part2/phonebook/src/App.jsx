import { useState, useEffect } from 'react'
import personService from './services/persons'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
      .catch(error => {
        console.log('There was a problem with the request: ', error)
      })
  }, [])

  const handleNameChange = (event) => setNewName(event.target.value)

  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleFilter = (event) => setFilter(event.target.value)

  const filteredPersons = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  const addPerson = (event) => {
    event.preventDefault()
    const personInPhonebook = persons.find(person => person.name === newName)

    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }

    if (personInPhonebook) {
      const { name, id } = personInPhonebook
      const replace = window.confirm(`${name} is already added to phonebook, replace the old number with a new one?`)

      if (replace) {
        personService
          .update(id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
            setMessage(`Updated ${returnedPerson.name}`)
            setTimeout(() => setMessage(null), 5000)
            setNewName('')
            setNewNumber('')
          })
          .catch(() => {
            setMessage(`Information of ${name} has already been removed from server`)
            setIsError(true)
            setTimeout(() => {
              setMessage(null)
              setIsError(false)
            }, 5000)
            setPersons(persons.filter(person => person.id !== id))
          })
      }

      return
    }

    personService
      .addNew(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setMessage(`Added ${returnedPerson.name}`)
        setTimeout(() => setMessage(null), 5000)
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        console.log('There was a problem with the request: ', error)
        setMessage(error.response.data.error)
        setIsError(true)
        setTimeout(() => {
          setMessage(null)
          setIsError(false)
        }, 5000)
      })

  }

  const deletePerson = (id, name) => {
    const agreed = window.confirm(`Delete ${name}?`)
    if (agreed) {
      personService
        .remove(id)
        .then(() => setPersons(persons.filter(person => person.id !== id)))
        .catch(error => {
          console.log('There was a problem with the request: ', error)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} isError={isError} />

      <Filter filter={filter} handleFilter={handleFilter} />

      <h2>Add a new</h2>

      <PersonForm
        name={newName}
        number={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        addPerson={addPerson}
      />

      <h2>Numbers</h2>

      <Persons persons={filteredPersons} onDelete={deletePerson} />
    </div>
  )
}

export default App