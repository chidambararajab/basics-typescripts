import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <div>
      <Child color={"red"} onClick={() => alert("on click")} />
    </div>
  );
};

export default Parent;
