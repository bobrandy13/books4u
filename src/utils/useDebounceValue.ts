import { useEffect, useState } from "react";

export default function useDebounceValue(value: string, time = 250) {
  const [debounceValue, setValue] = useState<string>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(value);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, time]);

  return debounceValue;
}
