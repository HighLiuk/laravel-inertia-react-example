import Guest from "@/Layouts/Guest"
import { Head, useForm } from "@inertiajs/inertia-react"

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
  })

  function handleChange({ target }) {
    setData(target.id, target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    post(route("login.store"))
  }

  return (
    <>
      <Head title="Login" />

      <form className="w-max m-auto" onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold my-10">Login</h1>

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
            <span className="border-transparent focus:border-transparent focus:ring-0 px-2 h-full py-2 text-lg bg-transparent">
              Login
            </span>
          </div>
        </button>
      </form>
    </>
  )
}

Login.layout = (page) => <Guest children={page} />
