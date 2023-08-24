import axios, { AxiosResponse } from 'axios'

type PayloadProp = {
  cityName: string
  limit?: number
}

const getCityDetails = async ({ cityName, limit = 10 } : PayloadProp): Promise<AxiosResponse | undefined> => {
  return await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=1f1841e22c7e686023a46767226fe795`)
}

export default getCityDetails
