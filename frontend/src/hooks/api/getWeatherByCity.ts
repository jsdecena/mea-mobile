import axios, { AxiosResponse } from 'axios'

type PayloadProp = {
  lat: number | undefined
  lon: number | undefined
  limit?: number
}

const getWeatherByCity = async ({ lat, lon, limit = 10 } : PayloadProp): Promise<AxiosResponse | undefined> => {
  return await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=1f1841e22c7e686023a46767226fe795&limit=${limit}`)
}

export default getWeatherByCity
