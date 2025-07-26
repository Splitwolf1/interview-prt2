import { Suspense } from 'react';
import Link from 'next/link';
import { fetchUsers } from '@/lib/fetchUsers';
import UserList from './UserList';
import Loading from '@/components/Loading';

// Server component for users page with proper error handling
export default async function UsersPage() {
  const users = await fetchUsers();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-stone-700 rounded-lg border border-stone-600 p-6 mb-8 shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-stone-100 mb-1">Users Dashboard</h1>
            <p className="text-stone-300">Manage and explore user information</p>
          </div>
          <Link
            href="/users/create"
            className="inline-flex items-center px-4 py-2 text-white font-medium rounded-lg"
            style={{ backgroundColor: '#7fd4e1' }}
          >
            Create User
          </Link>
        </div>
      </div>
      
      <Suspense fallback={<Loading />}>
        <UserList initialUsers={users} />
      </Suspense>
    </div>
  );
}