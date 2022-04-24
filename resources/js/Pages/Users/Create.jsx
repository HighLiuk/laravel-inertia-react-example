import { Head, useForm } from "@inertiajs/inertia-react"

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    name: "",
    email: "",
    password: "",
  })

  function handleChange({ target }) {
    setData(target.id, target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    post(route("users.store"))
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
            value={data.name}
            onChange={handleChange}
          />
        </div>

        <div className="text-sm mb-4 w-max text-red-400">{errors?.name}</div>

        <div className="flex border rounded text-gray-500 mb-4">
          <input
            className="border-transparent focus:border-transparent focus:ring-0 px-4 h-full py-2 text-lg"
            type="text"
            placeholder="email"
            id="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>

        <div className="text-sm mb-4 w-max text-red-400">{errors?.email}</div>

        <div className="flex border rounded text-gray-500 mb-4">
          <input
            className="border-transparent focus:border-transparent focus:ring-0 px-4 h-full py-2 text-lg"
            type="password"
            placeholder="password"
            id="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <div className="text-sm mb-4 w-max text-red-400">
          {errors?.password}
        </div>

        <button
          className={
            "w-full border rounded mb-4 text-white " +
            (processing
              ? " bg-blue-300 hover:bg-blue-300 cursor-not-allowed"
              : " bg-blue-500 hover:bg-blue-600 cursor-pointer")
          }
          type="submit"
          disabled={processing}
        >
          <div className="flex justify-center">
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

            <span className="border-transparent focus:border-transparent focus:ring-0 px-2 h-full py-2 text-lg bg-transparent">
              Create
            </span>
          </div>
        </button>
      </form>
    </>
  )
}
