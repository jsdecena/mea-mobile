import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../../App'

type PayloadProp = {
  lat: number | undefined
  lon: number | undefined
}

const getWeatherByCity = async ({ lat, lon} : PayloadProp): Promise<AxiosResponse | undefined> => {
  return await axios.post(`${API_URL}/api/city-weather`, {
    lat: String(lat),
    lon: String(lon)
  })  
}

export default getWeatherByCity
