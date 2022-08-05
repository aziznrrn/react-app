import { useParams } from 'react-router-dom'
import NotFound from './NotFound'
import Loader from '../Loader'
import useFetchGet from '../../Hooks/useFetchGet'

function Post() {
  const { id } = useParams()
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`
  const post = useFetchGet(url)

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