import React from "react";

interface ChildProps {
  color: String;
  onClick: () => void;
}

const ChildFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      <h1>{color}</h1>
      <button onClick={onClick}>Click fc me</button>
    </div>
  );
};

const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      <h1>{color}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default ChildFC;
