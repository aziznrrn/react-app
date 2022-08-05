import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`${url}?_limit=10`)
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(err => {
      console.log(err)
    })
  }, [url])

  if (posts) {
    return (
      <div className="p-4" style={{marginBottom: '4.5rem'}}>
        <h1 className="text-center font-bold mb-3">Home Page</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id} className="mb-3">
              <div className="text-gray-600 shadow-sm rounded p-4 border-black border">
              <Link to={`/${post.id}`} class="font-bold">{post.title}</Link>
              <p>{post.body.substring(0, 300)}...</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-gray-600">
      <h1>Loading...</h1>
    </div>
  )
}

export default Home;