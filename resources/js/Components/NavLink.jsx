import { Link } from "@inertiajs/inertia-react"

export default function NavLink({ children, name, as = "a", method = "GET" }) {
  return (
    <Link
      href={route(name)}
      as={as}
      method={method}
      className={`
      text-black hover:underline
      ${route().current(name) ? "font-bold underline" : ""}
    `}
    >
      {children}
    </Link>
  )
}
