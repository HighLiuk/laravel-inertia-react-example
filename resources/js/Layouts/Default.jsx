import Nav from "@/Components/Nav"

export default function Default({ children }) {
  return (
    <>
      <section className="p-6 bg-gray-200">
        <header className="flex justify-between">
          <h1 className="font-bold text-lg">My App</h1>

          <Nav />
        </header>
      </section>

      <section className="p-6">
        <div className="max-w-3xl mx-auto">{children}</div>
      </section>
    </>
  )
}
