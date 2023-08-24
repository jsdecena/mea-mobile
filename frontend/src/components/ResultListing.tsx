import React from "react";
import { DateTime } from "luxon";
import { ListProp } from "../App";

export interface ResultListingProp {
  items: ListProp[]
}

const ResultListing = ({ items } : ResultListingProp) => {
  // Display's day, temp, and description for each day

  // on click, day, city, temp, min, max description, and weather icon (optional)  
  return (
    <table className="w-full text-sm text-left text-gray-500 mt-10">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
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
          <tr className="bg-white border-b" key={index}>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {DateTime.fromSeconds(item.dt).toFormat('ccc, dd y')}
            </th>
            <td className="px-6 py-4">{item.main.temp} °C</td>
            <td className="px-6 py-4">{item.weather[0].description}</td>
          </tr>          
        ))}
      </tbody>
    </table>
  );
}

export default ResultListing;
