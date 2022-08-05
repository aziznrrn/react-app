import { useEffect, useState } from 'react'

function useFetchGet(url) {
  const [data, setData] = useState({
    loading: false,
    data: null,
  })

  useEffect(() => {
    setData({
      loading: true,
      data: null,
    })

    fetch(url)
    .then(res => res.json())
    .then(data => {
      if (typeof data === 'array') {
        if (data.length === 0) data = null
      }
      if (typeof data === 'object') {
        if (Object.entries(data).length === 0) data = null
      }
      setData({
        loading: false,
        data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }, [url])

  return data
}

export default useFetchGet