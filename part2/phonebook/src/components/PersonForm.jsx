export function PersonForm({ name, phone, addPerson, onNameChange, onPhoneChange }) {
  return (
    <form onSubmit={addPerson}>
      <div>
        name:
        <input value={name} onChange={onNameChange} autoComplete='off' />
      </div>
      <div>
        number:
        <input value={phone} onChange={onPhoneChange} autoComplete='off' />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm