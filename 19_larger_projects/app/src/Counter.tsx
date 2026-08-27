import { useState } from "react";

interface CounterProps {
  label: string;
}

function Counter({ label }: CounterProps) {
  const [count, setCount] = useState<number>(0);

  return (
    <button type="button" className="counter" onClick={() => setCount((current) => current + 1)}>
      {label} is {count}
    </button>
  );
}

export default Counter;
