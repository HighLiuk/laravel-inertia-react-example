import { Inertia } from "@inertiajs/inertia"
import { Head } from "@inertiajs/inertia-react"
import { useState } from "react"

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  })

  function handleChange({ target }) {
    setForm((values) => ({
      ...values,
      [target.id]: target.value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    Inertia.post("/users", form)
  }

  return (
    <>
      <Head title="Create User" />

      <form className="w-max m-auto" onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold my-10">Create User</h1>

        <div className="flex border rounded text-gray-500 mb-4">
          <input
            className="border-transparent focus:border-transparent focus:ring-0 px-4 h-full py-2 text-lg"
            type="text"
            placeholder="username"
            id="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex border rounded text-gray-500 mb-4">
          <input
            className="border-transparent focus:border-transparent focus:ring-0 px-4 h-full py-2 text-lg"
            type="email"
            placeholder="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex border rounded text-gray-500 mb-4">
          <input
            className="border-transparent focus:border-transparent focus:ring-0 px-4 h-full py-2 text-lg"
            type="password"
            placeholder="password"
            id="password"
            value={form.password}
            onChange={handleChange}
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

            <button
              className="border-transparent focus:border-transparent focus:ring-0 px-2 h-full cursor-pointer py-2 text-lg bg-transparent"
              type="submit"
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
