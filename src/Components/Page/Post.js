import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Post() {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const { id } = useParams()
  const [post, setPost] = useState({})
  useEffect(() => {
    fetch(`${url}/${id}`)
    .then(res => res.json())
    .then(data => setPost(data))
    .catch(err => {
      console.log(err)
    })
  }, [url, id])

  if (post) {
    return (
      <div className="p-4 text-gray-600" style={{marginBottom: '4.5rem'}}>
        <h2 className="font-bold mb-3">{post.title}</h2>
        <p>{post.body}</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-gray-600">
      <h1>Loading...</h1>
    </div>
  )
}
export default Post;