import { useEffect, useState } from "react"

const isBrowser = typeof window !== "undefined";

// console.log('typeof window', typeof window);
// console.log('typeof localstorage', typeof localStorage);
// console.log('isbrowser', isBrowser);

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (isBrowser) {
      const jsonValue = localStorage.getItem(key);
      if (jsonValue != null) return JSON.parse(jsonValue);
    }

    return initialValue;
  })

  const onStorageUpdate = (e) => {
    const changed = e.key;
    let newValue = undefined;
    try {
      newValue = JSON.parse(e.newValue);
    } catch(e) {
      
    }
    
    // console.log('storage changed', { changed, newValue });
    if (newValue && changed === key) {
      setValue(newValue);
    }
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    //https://dev.to/cassiolacerda/how-to-syncing-react-state-across-multiple-tabs-with-usestate-hook-4bdm
    window.addEventListener("storage", onStorageUpdate);
    return () => {
      window.removeEventListener("storage", onStorageUpdate);
    };
  }, [key, value]);

  return [value, setValue];
}