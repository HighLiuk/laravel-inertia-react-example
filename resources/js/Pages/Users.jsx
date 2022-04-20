import Default from "@/Layouts/Default"

export default function Users() {
  return <h1 className="text-4xl font-bold">Users</h1>
}

Users.layout = (page) => <Default children={page} />
