import Link from 'next/link';
import { User } from '@/types/user';

interface UserCardProps {
  user: User;
}

// Card component for displaying user information in grid layout
export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{user.name}</h3>
          <p className="text-slate-600">@{user.username}</p>
        </div>
        <span className="text-xs text-slate-500">ID: {user.id}</span>
      </div>
      
      <div className="space-y-2 mb-4">
        <p className="text-sm text-slate-600">
          <span className="font-medium">Email:</span> {user.email}
        </p>
        <p className="text-sm text-slate-600">
          <span className="font-medium">Phone:</span> {user.phone}
        </p>
        <p className="text-sm text-slate-600">
          <span className="font-medium">Company:</span> {user.company.name}
        </p>
        <p className="text-sm text-slate-600">
          <span className="font-medium">City:</span> {user.address.city}
        </p>
      </div>
      
      <Link
        href={`/users/${user.id}`}
        className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
      >
        View Details
      </Link>
    </div>
  );
}