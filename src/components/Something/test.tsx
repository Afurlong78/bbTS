import { useEffect, useState } from "react";

function Test() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("hello");
    setCount(1);
  }, []);

  return (
    <div>
      <div>{count}</div>
    </div>
  );
}

export default Test;
