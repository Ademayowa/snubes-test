import { useState, useEffect } from 'react';

export const getStorageValue = (key, defaultValue) => {
  // getting stored value
  if (typeof window !== 'undefined') {
    let saved = '';
    let initial = '';

    if (localStorage.getItem(key) === null) {
      saved = localStorage.getItem(key);
      initial = saved !== null ? JSON.parse(saved) : defaultValue;
    }

    return initial;
  }
};

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
