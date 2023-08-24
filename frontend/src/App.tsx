import React, { useEffect, useState } from "react";
import ResultListing from "./components/ResultListing";
import Empty from "./components/Empty";
import "./App.css";
import getCityDetails from "./hooks/api/getCityDetails";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import getWeatherByCity from "./hooks/api/getWeatherByCity";

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

  const handleOnSelect = async(city: any) => {
    setIsloading(true)

    const { data } : any = await getCityDetails({ cityName: city.name })
    const result = data.filter((item: SingleItemProp) => item.country === 'NZ')[0];

    const response = await getWeatherByCity({ lat: result.lat, lon: result.lon })
  
    // transform the result
    // const transformed = response?.data.list?.map((list: ListProp) => {
    //   return {
    //     dt: DateTime.fromSeconds(list.dt).toFormat('ccc, dd y'),
    //     temp: list.main.temp,
    //     temp_min: list.main.temp_min,
    //     temp_max: list.main.temp_max,
    //     description: list.weather[0].description,
    //     icon: list.weather[0].icon
    //   }
    // })

    setDetails(response?.data.list)
    setIsloading(false)
  }

  useEffect(() => {
    setItems([
      {name: 'Auckland', id: 'auckland'},
      {name: 'Hamilton', id: 'hamilton'},
      {name: 'Wellington', id: 'wellington'},
      {name: 'Dunedin', id: 'dunedin'},
    ])
  }, [details])

  return (
    <div className="overflow-x-auto p-10">
      <label htmlFor="email-address-icon">Search 5-day weather in your city</label>
      <hr className="my-5" />
      <ReactSearchAutocomplete
        items={items as unknown as string[]}
        onSelect={handleOnSelect}
        autoFocus
      />
      {isLoading && (<p className="p-4 mb-4 text-sm bg-gray-300 rounded-lg mt-5"> Fetching data, please wait ...</p>)}
      <div>{details && details.length > 0 ? (<ResultListing items={details} />) : (<Empty />)}</div>
    </div>
  );
}

export default App;
