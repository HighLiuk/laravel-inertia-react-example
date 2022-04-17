import { Link, usePage } from "@inertiajs/inertia-react"

export default function Nav() {
  const { component } = usePage()

  return (
    <nav className="mt-6">
      <ul className="list-disc">
        <li>
          <Link
            href="/"
            className={`
            text-blue-500 hover:underline
              ${component === "Home" ? "font-bold underline" : ""}
            `}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/users"
            className={`
            text-blue-500 hover:underline
              ${component === "Users" ? "font-bold underline" : ""}
            `}
          >
            Users
          </Link>
        </li>

        <li>
          <Link
            href="/settings"
            className={`
            text-blue-500 hover:underline
              ${component === "Settings" ? "font-bold underline" : ""}
            `}
          >
            Settings
          </Link>
        </li>

        <li>
          <Link
            href="/logout"
            method="POST"
            as="button"
            className="text-blue-500 hover:underline"
            data={{ foo: "bar" }}
          >
            Logout
          </Link>
        </li>
      </ul>

      <div className="mt-96">
        <Link href="/" preserveScroll>
          Refresh
        </Link>
      </div>
    </nav>
  )
}
