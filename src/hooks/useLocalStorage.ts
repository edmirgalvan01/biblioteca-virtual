import { useEffect, useState } from "react";

export const useLocalStorage = (item: string) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const storedData = localStorage.getItem(item);

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
    } else {
      setData(null);
    }
  }, []);

  return data;
};
