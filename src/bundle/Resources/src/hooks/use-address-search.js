import { useEffect, useState } from 'react'
import { API_DATAGOUV, client } from '../utils/api'

export default function useAddressSearch(searchTerm) {
  const [addresses, setAddress] = useState([])
  useEffect(() => {
    if (searchTerm.trim() !== '') {
      let isFresh = true
      client(`${API_DATAGOUV}?q=${searchTerm}`).then(({ features }) => {
        if (isFresh) setAddress(features)
      })
      return () => (isFresh = false)
    }
  }, [searchTerm])
  return addresses
}
