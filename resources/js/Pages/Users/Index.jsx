import Pagination from "@/Components/Pagination"
import Search from "@/Components/Search"
import { Head, Link } from "@inertiajs/inertia-react"

export default function Users({ users, filter }) {
  return (
    <>
      <Head title="Users" />

      <div className="flex justify-between mb-4">
        <div className="flex space-x-8 items-center">
          <h1 className="text-4xl font-bold">Users</h1>

          <div className="border rounded-md bg-blue-500 hover:bg-blue-600 text-white cursor-pointer">
            <Link
              href="/users/create"
              className="border-transparent focus:border-transparent focus:ring-0 px-4 block py-1 cursor-pointer text-lg bg-transparent"
            >
              Create User
            </Link>
          </div>
        </div>

        <Search filter={filter} />
      </div>

      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <tbody className="text-base divide-y divide-gray-100">
                {users.data.map((user) => (
                  <tr key={user.id}>
                    <td className="px-2 py-3 whitespace-nowrap">
                      <div className="font-medium text-gray-900">
                        {user.name}
                      </div>
                    </td>

                    <td className="px-2 py-3 whitespace-nowrap">
                      <div className="text-base text-right text-indigo-600 hover:text-indigo-900">
                        <Link href={`/users/${user.id}/edit`}>Edit</Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Pagination links={users.links} />
    </>
  )
}
