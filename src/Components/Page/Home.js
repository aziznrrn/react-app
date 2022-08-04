import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'  

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-gray-600">
      <h1>Home</h1>
      <p><FontAwesomeIcon icon={faHome}/> Is this really home?</p>
    </div>  
  )
}

export default Home;