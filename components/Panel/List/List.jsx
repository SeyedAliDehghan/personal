import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaste } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function List({ activeItem }) {
  const { data: session } = useSession();

  return (
    <ul>
      <li>
        <Link href="/admin">
          <a
            className={`mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200 ${
              activeItem === "home" ? " bg-gray-200 text-blue-600" : null
            }`}
          >
            <span className="mr-4 opacity-50">
              <FontAwesomeIcon
                icon={faHome}
                style={{ width: "15px", marginRight: "5px" }}
              />
            </span>

            <span>Dashboard</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/projects">
          <a
            className={`mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200 ${
              activeItem === "projects" ? " bg-gray-200 text-blue-600" : null
            }`}
          >
            <span className="mr-4 opacity-50">
              <FontAwesomeIcon
                icon={faPaste}
                style={{ width: "15px", marginRight: "5px" }}
              />
            </span>

            <span>Projects</span>
          </a>
        </Link>
      </li>
      <li>
        <a
          href="#"
          className={`mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200 ${
            activeItem === "posts" ? " bg-gray-200 text-blue-600" : null
          }`}
        >
          <span className="mr-4 opacity-50">♥</span>
          <span>Posts</span>
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
