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
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Users Dashboard</h1>
        <Link
          href="/users/create"
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Create User
        </Link>
      </div>
      
      <Suspense fallback={<Loading />}>
        <UserList initialUsers={users} />
      </Suspense>
    </div>
  );
}