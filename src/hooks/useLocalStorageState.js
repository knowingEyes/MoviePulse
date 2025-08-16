import { useEffect, useRef, useState } from "react";

export default function useLocalStorageState(
  initialstate,
  key,
  { render = true } = {}
) {
  function getLocalStorageitem() {
    return JSON.parse(localStorage.getItem(key)) || initialstate;
  }
  const [stateValue, setStateValue] = useState(getLocalStorageitem);
  const refValue = useRef(getLocalStorageitem());
  useEffect(() => {
    if (!render) return;
    localStorage.setItem(key, JSON.stringify(stateValue));
  }, [key, stateValue, render]);
  const setValue = (value) => {
    const valueToSet =
      value instanceof Function
        ? value(render ? stateValue : refValue.current)
        : refValue.current;
    if (render) {
      setStateValue(valueToSet);
    } else {
      localStorage.setItem(key, JSON.stringify(valueToSet));
    }
  };

  return render ? [stateValue, setStateValue] : [refValue, setValue];
}
