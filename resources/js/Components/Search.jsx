import { Inertia } from "@inertiajs/inertia"
import { useState } from "react"
import { DebounceInput } from "react-debounce-input"

export default function Search({ filter }) {
  const [search, setSearch] = useState(filter ?? "")

  function handleChange(e) {
    const { value } = e.target
    const payload = value ? { search: value } : {}

    setSearch(value)
    Inertia.get(route("users.index"), payload, {
      preserveState: true,
      replace: true,
    })
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center max-w-md mx-auto bg-white rounded-lg outline outline-1 outline-gray-500">
        <div className="w-full">
          <DebounceInput
            type="search"
            className="w-full px-4 py-1 text-gray-800 rounded-full border-transparent focus:border-transparent focus:ring-0"
            placeholder="Search..."
            value={search}
            debounceTimeout={300}
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            type="submit"
            className={`
              flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg
              ${search.length ? "" : "cursor-not-allowed"}
            `}
            disabled={!search.length}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
