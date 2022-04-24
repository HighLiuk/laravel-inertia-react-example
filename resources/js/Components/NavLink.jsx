import { Link } from "@inertiajs/inertia-react"

export default function NavLink({ children, name }) {
  return (
    <Link
      href={route(name)}
      className={`
      text-black hover:underline
      ${route().current(name) ? "font-bold underline" : ""}
    `}
    >
      {children}
    </Link>
  )
}
