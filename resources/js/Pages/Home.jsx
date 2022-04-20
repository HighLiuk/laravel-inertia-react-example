import Default from "@/Layouts/Default"

export default function Home() {
  return <h1 className="text-4xl font-bold">Home</h1>
}

Home.layout = (page) => <Default children={page} />
