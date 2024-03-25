import { useState } from "react";

export default function useInput(defaultValue = "") {
  const [value, setVlaue] = useState(defaultValue);

  return {
    value,
    onChange: (event) => setVlaue(event.target.value),
  };
}
