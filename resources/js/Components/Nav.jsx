import NavLink from "./NavLink"

export default function Nav() {
  return (
    <nav>
      <ul className="flex space-x-6">
        <li>
          <NavLink name="home">Home</NavLink>
        </li>

        <li>
          <NavLink name="users.index">Users</NavLink>
        </li>

        <li>
          <NavLink name="settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  )
}
