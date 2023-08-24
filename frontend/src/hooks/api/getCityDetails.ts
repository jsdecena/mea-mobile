import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../../App'

type PayloadProp = {
  cityName: string
}

const getCityDetails = async ({ cityName } : PayloadProp): Promise<AxiosResponse | undefined> => {
  return await axios.post(`${API_URL}/api/city-coordinates`, {
    city: cityName.toLowerCase()
  })
}

export default getCityDetails
