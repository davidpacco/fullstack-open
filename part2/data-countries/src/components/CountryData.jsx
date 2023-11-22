function CountryData({ length, country, weather }) {
  if (length !== 1) return null

  return (
    <>
      <h1>{country.name.common}</h1>

      <p>Capital {country.capital[0]}</p>
      <p>Area {country.area}</p>

      <strong>Languages:</strong>

      <ul>
        {Object.keys(country.languages).map(lang => (
          <li key={lang}>{country.languages[lang]}</li>
        ))}
      </ul>

      <img src={country.flags.png} alt={country.flags.alt} />

      <h2>Weather in {country.capital[0]}</h2>

      <p>temperature {(weather.main?.temp - 273.15).toFixed(2)} Celcius</p>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0]?.icon}@2x.png`} alt={weather.weather?.description} />
      <p>wind {weather.wind?.speed} m/s</p>
    </>
  )
}

export default CountryData