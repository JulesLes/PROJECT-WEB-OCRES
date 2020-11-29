import React, {createContext, useState} from 'react';

export const Context = createContext()

export default ({
  children
}) => {
  const [city, setCity] = useState('Washington DC')

  const [country, setCountry] = useState('usa')

  return (
      <Context.Provider value = {{
        city: city,
        setCity: setCity,
        country: country,
        setCountry: setCountry,
      }}>
      {children}
      </Context.Provider>
  )
}
