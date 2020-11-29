import React, {createContext, useState} from 'react';

export const Context = createContext()

export default ({
  children
}) => {
  const [city, setCity] = useState('Washington DC')

  return (
      <Context.Provider value = {{
        city: city,
        setCity: setCity
      }}>
      {children}
      </Context.Provider>
  )
}
