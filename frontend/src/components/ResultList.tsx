import { DateTime } from "luxon";
import { ListProp } from "../App";

export interface ResultListProp {
  items: ListProp[]
  city?: string
  setItem: (item: ListProp) => void
  setHasSelected: (hasSelected: boolean) => void
}

const ResultList = ({ items, setItem, setHasSelected } : ResultListProp) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 mt-10">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th>Sky</th>
          <th scope="col" className="px-6 py-3">
            Day
          </th>          
          <th scope="col" className="px-6 py-3">
            Temp
          </th>
          <th scope="col" className="px-6 py-3">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index) => (
          <tr className="bg-white border-b" key={index} onClick={() => {
            setItem(item)
            setHasSelected(true)
          }}>
            <th><img alt="weather-icon" src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} width={24} height={24} /></th>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {DateTime.fromSeconds(item.dt).toLocaleString(DateTime.DATE_HUGE)}
            </th>
            <td className="px-6 py-4">{item.main.temp} °C</td>
            <td className="px-6 py-4">{item.weather[0].description}</td>
          </tr>          
        ))}
      </tbody>
    </table>
  );
}

export default ResultList;
