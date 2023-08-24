import { DateTime } from "luxon";
import { ListProp } from "../App";
import { useEffect, useState } from "react";

export interface ResultItemProp {
  item: ListProp
  city?: string
  setHasSelected: (hasSelected: boolean) => void
}

const ResultItem = ({ item, city, setHasSelected } : ResultItemProp) => {
  // Display's day, temp, and description for each day

  // on click, day, city, temp, min, max description, and weather icon (optional) 
  const [itemDetail, setItemDetail] = useState<ListProp>(item)

  useEffect(() => {
    setItemDetail(item)
  }, [itemDetail])

  return (
    <>
      <table className="w-full text-sm text-left text-gray-500 mt-10">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Day
            </th>
            <th scope="col" className="px-6 py-3">
              City
            </th>          
            <th scope="col" className="px-6 py-3">
              Temp
            </th>
            <th scope="col" className="px-6 py-3">
              Temp Min
            </th>
            <th scope="col" className="px-6 py-3">
              Temp Max
            </th>                    
            <th scope="col" className="px-6 py-3">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {DateTime.fromSeconds(itemDetail.dt).toFormat('ccc, dd y')}
            </th>
            <td className="px-6 py-4">{city}</td>
            <td className="px-6 py-4">{itemDetail.main.temp} °C</td>
            <td className="px-6 py-4">{itemDetail.main.temp_min} °C</td>
            <td className="px-6 py-4">{itemDetail.main.temp_max} °C</td>
            <td className="px-6 py-4">{itemDetail.weather[0].description}</td>
          </tr>
        </tbody>
      </table>
      <div className="my-5" />
      <button onClick={() => setHasSelected(false)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back</button>
    </>
  );
}

export default ResultItem;
