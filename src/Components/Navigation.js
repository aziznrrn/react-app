import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faQuestionCircle,
  faAddressBook,
  faGear
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"

function Navigation() {
  return (
    <nav className="bg-gray-200 text-center p-2 fixed bottom-0 w-full border-t border-black">
      <div className="md:container md:mx-auto">
        <ul className="flex flex-row justify-between w-full">
          <li className="items-center p-3">
            <NavLink exact to="/" className="text-gray-600" activeClassName="font-bold text-black">
              <FontAwesomeIcon icon={faHome}/>
              <span className="mx-1">Home</span>
            </NavLink>
          </li>
          <li className="items-center p-3">
            <NavLink to="contact" className="text-gray-600" activeClassName="font-bold text-black">
              <FontAwesomeIcon icon={faAddressBook}/>
              <span className="mx-1">Contact</span>
            </NavLink>
          </li>
          <li className="items-center p-3">
            <NavLink to="faq" className="text-gray-600" activeClassName="font-bold text-black">
              <FontAwesomeIcon icon={faQuestionCircle}/>
              <span className="mx-1">FAQ</span>
            </NavLink>
          </li>
          <li className="items-center p-3">
            <NavLink to="setting" className="text-gray-600" activeClassName="font-bold text-black">
              <FontAwesomeIcon icon={faGear}/>
              <span className="mx-1">Setting</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
