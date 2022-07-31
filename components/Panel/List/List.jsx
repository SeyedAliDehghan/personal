import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function List({ activeItem}) {
  const { data: session } = useSession();



  return (
        <ul>
          <li>
            <a
              href="#"
              className={`mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200 ${activeItem==='home'?' bg-gray-200 text-blue-600':null}`}
            >
              <span className="mr-4 opacity-50"><FontAwesomeIcon
                icon={faHome}
                style={{ width: "15px", marginRight: "5px" }}
              /></span>
              
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200"
            >
              <span className="mr-4 opacity-50">♥</span>
              <span>Item</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200"
            >
              <span className="mr-4 opacity-50">♥</span>
              <span>Item</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200"
            >
              <span className="mr-4 opacity-50">♥</span>
              <span>Active</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200"
            >
              <span className="mr-4 opacity-50">♥</span>
              <span>Item</span>
            </a>
          </li>
        </ul>
  );
}
