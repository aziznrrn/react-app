import { Link } from 'react-router-dom'
import useFetchGet from '../../Hooks/useFetchGet'
import Loader from '../Loader'
import NotFound from './NotFound'

function Home() {
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'

  let posts = useFetchGet(url)

  if (posts.loading) return <Loader />

  if (posts.data) {
    return (
      <div className="p-4" style={{marginBottom: '4.5rem'}}>
        <h1 className="text-center font-bold mb-3">Home Page</h1>
        <ul>
          {posts.data.map(post => (
            <li key={post.id} className="mb-3">
              <div className="text-gray-600 shadow-sm rounded p-4 border-black border">
              <Link
                to={`post/${post.id}`}
                className="font-bold hover:text-blue-500 active:bg-gray-100 focus:text-blue-600">
                {post.title}
              </Link>
              <p>{post.body.substring(0, 300)}...</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return <NotFound />
}

export default Home;