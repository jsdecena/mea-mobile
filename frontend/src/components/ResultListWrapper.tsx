import { useState } from "react";
import { ListProp } from "../App";
import ResultList from "./ResultList";
import ResultItem from "./ResultItem";

export interface ResultListProp {
  items: ListProp[]
  city?: string
}

const ResultListWrapper = ({ items, city } : ResultListProp) => {

  const [selectedItem, setSelectedItem] = useState<ListProp>()
  const [hasSelected, setHasSelected] = useState<boolean>(false)

  return (
    <>
      {!selectedItem || !hasSelected ? (<ResultList setHasSelected={setHasSelected} setItem={setSelectedItem} items={items} />) : <ResultItem setHasSelected={setHasSelected} city={city} item={selectedItem} />}
    </>
  );
}

export default ResultListWrapper;
