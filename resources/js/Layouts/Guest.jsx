import { Head, usePage } from "@inertiajs/inertia-react"

export default function Guest({ children }) {
  const { component } = usePage()

  return (
    <>
      <Head title={component} />

      <section className="flex h-screen justify-center items-center pb-12">
        {children}
      </section>
    </>
  )
}
