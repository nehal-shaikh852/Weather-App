import { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: 'Pune',
    temp: 27,
    tempMin: 25,
    tempMax: 28,
    humidity: '70%',
    feelsLike: 26,
    weather: 'scattered clouds',
  })

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }
  return (
    <div>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox Info = {weatherInfo}/>
    </div>
  )
}
