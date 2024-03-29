import { useState, useEffect } from 'react'

function getStorageValue(key, defaultValue) {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key)
    const initial = JSON.parse(saved)
    return initial || defaultValue
  } else {
    return defaultValue
  }
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue)
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }, [key, value])

  return [value, setValue]
}
