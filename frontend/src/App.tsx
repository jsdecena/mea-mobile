import { useEffect, useState } from "react";
import Empty from "./components/Empty";
import "./App.css";
import getCityDetails from "./hooks/api/getCityDetails";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import getWeatherByCity from "./hooks/api/getWeatherByCity";
import ResultListWrapper from "./components/ResultListWrapper";
import getCities from "./hooks/api/getCities";

// For demo purposes, we declare the API URL here instead in the ENV
export const API_URL = 'http://localhost:8000'

interface MultipleItemProp {
  name: string
  id: string
}

interface SingleItemProp {
  name: string
  state: string
  lat: number
  long: number
  country: string
}

export interface ListProp {
  dt: number // date timestamp
  main: {
    temp: number
    temp_min: number
    temp_max: number
  }
  weather: [
    {
      description: string
      icon: string
    }    
  ]
}


function App() {

  const [isLoading, setIsloading] = useState<boolean>(false)
  const [items, setItems] = useState<MultipleItemProp[]>([])
  const [details, setDetails] = useState<ListProp[]>([])
  const [city, setCity] = useState<string>('')

  const handleOnSelect = async(city: any) => {
    setIsloading(true)

    setCity(city.name)
    const { data } : any = await getCityDetails({ cityName: city.name })
    const result = data.filter((item: SingleItemProp) => item.country === 'NZ')[0];
    
    if(result) {
      const response = await getWeatherByCity({ lat: result?.lat, lon: result?.lon })
      setDetails(response?.data)
    }

    setIsloading(false)
  }

  const onClear = () => {
    setDetails([])
  }

  const getCityList = async() => {
    const { data }: any = await getCities()
    setItems(data)
  }

  useEffect(() => {
    getCityList()
  }, [details])

  return (
    <div className="p-10">
      <label htmlFor="email-address-icon">Search 5-day weather in your city</label>
      <hr className="my-5" />
      <ReactSearchAutocomplete
        items={items as unknown as string[]}
        onSelect={handleOnSelect}
        autoFocus
        onClear={onClear}
        onSearch={(keyword) => {
          // Reset the table
          if(keyword.length === 0) {
            setDetails([])
          }
        }}
      />
      {isLoading && (<p className="p-4 mb-4 text-sm bg-gray-300 rounded-lg mt-5"> Fetching data, please wait ...</p>)}
      <div>{details && details.length > 0 ? (<ResultListWrapper city={city} items={details} />) : (<Empty />)}</div>
    </div>
  );
}

export default App;
