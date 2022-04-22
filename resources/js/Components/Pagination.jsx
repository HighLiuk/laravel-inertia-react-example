import { Link } from "@inertiajs/inertia-react"

export default function Pagination({ links }) {
  function getClass(link, key, length) {
    const activeClasses =
      "bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700  py-2 px-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
    const nonActiveClasses =
      "bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"

    if (key == 0) return ["rounded-l-lg", nonActiveClasses].join(" ")
    if (key == length - 1) return ["rounded-r-lg", nonActiveClasses].join(" ")
    if (link.active) return activeClasses
    return nonActiveClasses
  }

  return (
    <nav className="mt-10 max-w-2xl mx-auto">
      <ul className="flex justify-center -space-x-px">
        {links.map((link, key, { length }) => (
          <li key={key}>
            <Link
              className={getClass(link, key, length)}
              href={link.url}
              dangerouslySetInnerHTML={{ __html: link.label }}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}
