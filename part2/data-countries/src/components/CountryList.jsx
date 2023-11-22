function CountryList({ countries, setQuery }) {
  if (!countries || countries.length === 1) return null

  if (countries.length > 10) return <p>Too many matches, specify another filter</p>

  return (
    <>
      {countries.map(country => (
        <p key={country.cca3}>{country.name.common} <button onClick={() => setQuery(country.name.common)}>show</button></p>
      ))}
    </>
  )
}

export default CountryList