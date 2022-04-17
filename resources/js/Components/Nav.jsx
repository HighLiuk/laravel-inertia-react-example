import { Link } from "@inertiajs/inertia-react"

export default function Nav() {
  return (
    <nav className="mt-6">
      <ul className="list-disc">
        <li>
          <Link href="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </li>

        <li>
          <Link href="/users" className="text-blue-500 hover:underline">
            Users
          </Link>
        </li>

        <li>
          <Link href="/settings" className="text-blue-500 hover:underline">
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
