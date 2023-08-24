import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../../App'

const getCities = async (): Promise<AxiosResponse | undefined> => {
  return await axios.get(`${API_URL}/api/cities`)
}

export default getCities
