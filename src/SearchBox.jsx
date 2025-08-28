import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import './SearchBox.css'
import { useState } from 'react'

export default function SearchBox({ updateInfo }) {
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
  const API_KEY = '0537c874e6def10e6a63ddbde5cdd9f8'

  let [city, setCity] = useState('')
  let [err, setErr] = useState(false)

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      )
      let jsonResponse = await response.json()

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      }

      console.log(result)
      return result;
    } catch (err) {
      throw err
    }
  }

  let handleChange = (event) => {
    setCity(event.target.value)
  }

  let handleSubmit = async (event) => {
    try {
       event.preventDefault()
    console.log(city)
    let newInfo = await getWeatherInfo()
    updateInfo(newInfo)
    setCity('')
    } catch (err) {
      setErr(true)
    }   
  }

  return (
    <div className="SearchBox">
      <h3>Search For Weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {err && <p style={{color : "red"}}>No such place exists!</p>}
      </form>
    </div>
  )
}
