import { Link } from "@inertiajs/inertia-react"

export default function NavLink({ children, active, ...props }) {
  return (
    <Link
      {...props}
      className={`
    text-blue-500 hover:underline
      ${active ? "font-bold underline" : ""}
    `}
    >
      {children}
    </Link>
  )
}
