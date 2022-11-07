import { useEffect, useState } from "react";

const Count = ({ value, onCount, min = 0, max = 10 }) => {
  const [count, setCount] = useState(value || min);

  const handleCount = (type) =>
    setCount((prev) => (type === "+" ? prev + 1 : prev - 1));

  useEffect(() => {
    onCount(count);
  }, [count, onCount]);

  return (
    <div className="count">
      <button disabled={count === min} onClick={() => handleCount("-")}>
        -
      </button>
      {count}
      <button disabled={count === max} onClick={() => handleCount("+")}>
        +
      </button>
    </div>
  );
};

export default Count;
