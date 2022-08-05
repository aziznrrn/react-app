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
    <nav className="fixed bottom-0 right-0 left-0 w-full">
      <div className="bg-gray-200 text-center border-t border-black p-2 mx-auto" style={{maxWidth: '1000px'}}>
        <ul className="flex flex-row justify-between">
          <li className="items-center p-3">
            <NavLink exact to="/" className="text-gray-600" activeClassName="font-bold text-black">
              <FontAwesomeIcon icon={faHome}/>
              <span className="mx-1">Home</span>
            </NavLink>
          </li>
          <li className="items-center p-3">
            <NavLink to="/contact" className="text-gray-600" activeClassName="font-bold text-black">
              <FontAwesomeIcon icon={faAddressBook}/>
              <span className="mx-1">Contact</span>
            </NavLink>
          </li>
          <li className="items-center p-3">
            <NavLink to="/faq" className="text-gray-600" activeClassName="font-bold text-black">
              <FontAwesomeIcon icon={faQuestionCircle}/>
              <span className="mx-1">FAQ</span>
            </NavLink>
          </li>
          <li className="items-center p-3">
            <NavLink to="/setting" className="text-gray-600" activeClassName="font-bold text-black">
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
