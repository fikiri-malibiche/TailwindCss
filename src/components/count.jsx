import React, { useState } from "react";
function Count() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <>
       
      <div className="flex flex-row justify-center text-2xl items-center  my-2 ">
        <button
          onClick={decrementCount}
          className="bg-red-500 text-white px-4 py-2 rounded mx-1"
        >
          Decrement
        </button>
        <p>Count: {count}</p>
        <button
          onClick={incrementCount}
          className="bg-blue-500 text-white px-4 py-2 rounded mx-1"
        >
          Increment
        </button>
      </div>
    </>
  );
}
export default Count;
