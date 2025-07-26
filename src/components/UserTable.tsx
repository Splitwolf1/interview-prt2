import Link from 'next/link';
import { User } from '@/types/user';

interface UserTableProps {
  users: User[];
}

// Table component for displaying users in a responsive table layout
export default function UserTable({ users }: UserTableProps) {
  return (
    <div className="overflow-x-auto shadow-sm rounded-lg border border-stone-200">
      <table className="min-w-full bg-stone-50">
        <thead className="bg-stone-700 border-b border-stone-600">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-stone-100 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-stone-100 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-stone-100 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-stone-100 uppercase tracking-wider">
              Company
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-stone-100 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-200">
          {users.map((user, index) => (
            <tr 
              key={user.id} 
              className={`
                hover:bg-stone-100 transition-colors duration-150
                ${index % 2 === 0 ? 'bg-white' : 'bg-stone-50'}
              `}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-stone-300 rounded-full flex items-center justify-center text-stone-700 font-medium text-sm">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-stone-900">{user.name}</div>
                    <div className="text-sm text-stone-600">@{user.username}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-700">
                {user.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-700">
                {user.phone}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-700">
                <span className="font-medium">{user.company.name}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <Link
                  href={`/users/${user.id}`}
                  className="font-medium"
                  style={{ color: '#7fd4e1' }}
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}