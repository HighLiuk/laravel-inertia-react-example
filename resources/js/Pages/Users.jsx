import Pagination from "@/Components/Pagination"
import { Link } from "@inertiajs/inertia-react"

export default function Users({ users }) {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Users</h1>

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
