import Nav from "@/Components/Nav"
import { Head, usePage } from "@inertiajs/inertia-react"

export default function Default({ children }) {
  const {
    props: { auth },
    component,
  } = usePage()

  return (
    <>
      <Head title={component} />

      <section className="p-6 bg-gray-200">
        <header className="flex justify-between">
          <div className="flex items-center">
            <h1 className="font-bold text-lg">My App</h1>

            <p className="text-sm ml-4">Welcome Back, {auth.user.name}!</p>
          </div>

          <Nav />
        </header>
      </section>

      <section className="p-6">
        <div className="max-w-3xl mx-auto">{children}</div>
      </section>
    </>
  )
}
