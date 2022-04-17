import { usePage } from "@inertiajs/inertia-react"
import NavLink from "./NavLink"

export default function Nav() {
  const { component } = usePage()

  return (
    <nav className="mt-6">
      <ul className="list-disc">
        <li>
          <NavLink href="/" active={component === "Home"}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink href="/users" active={component === "Users"}>
            Users
          </NavLink>
        </li>

        <li>
          <NavLink href="/settings" active={component === "Settings"}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
