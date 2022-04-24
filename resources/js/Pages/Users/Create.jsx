import { Head } from "@inertiajs/inertia-react"

export default function Create() {
  return (
    <>
      <Head title="Create User" />

      <div className="w-max m-auto">
        <h1 className="text-4xl font-bold my-10">Create User</h1>

        <div className="flex border rounded text-gray-500 mb-4">
          <input
            className="border-transparent focus:border-transparent focus:ring-0 px-4 h-full py-2 text-lg"
            type="text"
            placeholder="username"
            required
          />
        </div>

        <div className="flex border rounded text-gray-500 mb-4">
          <input
            className="border-transparent focus:border-transparent focus:ring-0 px-4 h-full py-2 text-lg"
            type="email"
            placeholder="email"
            required
          />
        </div>

        <div className="flex border rounded text-gray-500 mb-4">
          <input
            className="border-transparent focus:border-transparent focus:ring-0 px-4 h-full py-2 text-lg"
            type="password"
            placeholder="password"
            required
          />
        </div>

        <div className="border rounded mb-4 bg-blue-600 text-white cursor-pointer">
          <div className="flex w-max mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>

            <input
              className="border-transparent focus:border-transparent focus:ring-0 px-2 h-full cursor-pointer py-2 text-lg bg-transparent"
              type="button"
              value="Create"
            />
          </div>
        </div>
      </div>
    </>
  )
}
