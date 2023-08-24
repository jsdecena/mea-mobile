import React from "react";

const Empty = () => {
  return (
    <div className="p-4 mb-4 text-sm bg-yellow-50 bg-warning rounded-lg mt-5" role="alert">
      <span className="font-medium">No weather results.</span>  Try searching for your city
    </div>
  );
}

export default Empty;
