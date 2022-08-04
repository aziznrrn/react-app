import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faQuestionCircle,
  faAddressBook,
  faGear
} from '@fortawesome/free-solid-svg-icons'  

function Navigation() {
  return (
    <nav className="bg-gray-200 text-center p-2 absolute bottom-0 w-full border-t">
      <div className="md:container md:mx-auto"> 
        <ul className="flex flex-row justify-between w-full">
          <li className="items-center p-3">
            <a href="/" className="text-gray-600">
              <FontAwesomeIcon icon={faHome} className="text-gray-600" />
              <span className="mx-1">Home</span>
            </a>
          </li>
          <li className="items-center p-3">
            <a href="contact" className="text-gray-600">
              <FontAwesomeIcon icon={faAddressBook} className="text-gray-600" />
              <span className="mx-1">Contact</span>
            </a>
          </li>
          <li className="items-center p-3">
            <a href="faq" className="text-gray-600">
              <FontAwesomeIcon icon={faQuestionCircle} className="text-gray-600" />
              <span className="mx-1">FAQ</span>
            </a>
          </li>
          <li className="flex items-center p-3">
            <a href="setting" className="text-gray-600">
              <FontAwesomeIcon icon={faGear} className="text-gray-600" />
              <span className="mx-1">Setting</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
