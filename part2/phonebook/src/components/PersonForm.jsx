export function PersonForm({ name, number, addPerson, onNameChange, onNumberChange }) {
  return (
    <form onSubmit={addPerson}>
      <div>
        name:
        <input value={name} onChange={onNameChange} autoComplete='off' />
      </div>
      <div>
        number:
        <input value={number} onChange={onNumberChange} autoComplete='off' />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm