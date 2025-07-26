import Link from 'next/link';
import { User } from '@/types/user';

interface UserCardProps {
  user: User;
}

// Card component for displaying user information in grid layout
export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-stone-50 rounded-lg border border-stone-200 p-6 hover:shadow-md hover:border-stone-300 hover:bg-white transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-stone-900">{user.name}</h3>
          <p className="text-stone-600">@{user.username}</p>
        </div>
        <span className="text-xs bg-stone-200 text-stone-700 px-2 py-1 rounded font-medium">#{user.id}</span>
      </div>
      
      <div className="space-y-3 mb-5">
        <p className="text-sm text-stone-700">
          <span className="font-medium text-stone-900">Email:</span> {user.email}
        </p>
        <p className="text-sm text-stone-700">
          <span className="font-medium text-stone-900">Phone:</span> {user.phone}
        </p>
        <p className="text-sm text-stone-700">
          <span className="font-medium text-stone-900">Company:</span> {user.company.name}
        </p>
        <p className="text-sm text-stone-700">
          <span className="font-medium text-stone-900">City:</span> {user.address.city}
        </p>
      </div>
      
      <Link
        href={`/users/${user.id}`}
        className="inline-block w-full text-center px-4 py-2 text-white text-sm font-medium rounded"
        style={{ backgroundColor: '#7fd4e1' }}
      >
        View Details
      </Link>
    </div>
  );
}