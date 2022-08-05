import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound'
import Loader from '../Loader'

function Post() {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const { id } = useParams()
  const [post, setPost] = useState({
    loading: false,
    data: null,
  })

  useEffect(() => {
    setPost({
      loading: true,
      data: null,
    })

    fetch(`${url}/${id}`)
    .then(res => res.json())
    .then(data => {
      if (Object.entries(data).length === 0) data = null
      setPost({ loading: false, data })
    })
    .catch(err => {
      console.log(err)
    })
  }, [url, id])

  if (post.loading) return <Loader />

  if (post.data) {
    return (
      <div className="p-4 text-gray-600" style={{marginBottom: '4.5rem'}}>
        <h2 className="font-bold mb-3">{post.data.title}</h2>
        <p>{post.data.body}</p>
      </div>
    )
  }

  return <NotFound />
}
export default Post