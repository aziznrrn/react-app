import { useEffect, useState } from 'react'

function Home() {
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {console.log(data); setPosts(data)})
    .catch(err => {
      console.log(err)
    })
  } , [url])

  if (posts) {
    return (
      <div className="p-4" style={{marginBottom: '4.5rem'}}>
        <h1 className="text-center font-bold mb-3">Home Page</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id} className="mb-3">
              <div className="text-gray-600 shadow-sm rounded p-4 border-black border">
              <h1 className="font-bold">{post.title}</h1>
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