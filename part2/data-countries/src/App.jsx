import { useEffect } from "react"
import { useState } from "react"

import CountryList from "./components/CountryList"
import CountryData from "./components/CountryData"

const api_key = import.meta.env.VITE_API_KEY

function App() {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState({})

  useEffect(() => {
    fetch('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data)
      })
  }, [])

  const filteredCountries = query
    ? countries.filter(country => country.name.common.toLowerCase().includes(query.toLowerCase()))
    : []

  useEffect(() => {
    if (filteredCountries.length > 0) {
      const country = filteredCountries[0]
      const lat = country.capitalInfo.latlng[0]
      const lon = country.capitalInfo.latlng[1]
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
        .then(response => response.json())
        .then(data => setWeather(data))
    }

  }, [query])

  const handleChange = (event) => {
    const newQuery = event.target.value
    setQuery(newQuery)
  }



  return (
    <>
      <label htmlFor="country">find countries </label>
      <input id="country" value={query} onChange={handleChange} />
      <CountryList countries={filteredCountries} setQuery={setQuery} />
      <CountryData length={filteredCountries.length} country={filteredCountries[0]} weather={weather} />
    </>
  )
}

export default App