'use client';

import { useState, useMemo } from 'react';
import { User } from '@/types/user';
import UserTable from '@/components/UserTable';
import UserCard from '@/components/UserCard';

interface UserListProps {
  initialUsers: User[];
}

// Client component for user list with search and view toggle functionality
export default function UserList({ initialUsers }: UserListProps) {
  const [users] = useState<User[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');

  // Filter users based on search term
  const filteredUsers = useMemo(() => {
    if (!searchTerm) return users;
    
    const term = searchTerm.toLowerCase();
    return users.filter(user => 
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.company.name.toLowerCase().includes(term) ||
      user.username.toLowerCase().includes(term)
    );
  }, [users, searchTerm]);

  return (
    <div className="space-y-6">
      {/* Search and View Controls */}
      <div className="bg-stone-50 p-6 rounded-lg border border-stone-200 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search users by name, email, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-colors"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-stone-700">View:</span>
            <div className="flex bg-stone-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  viewMode === 'table' 
                    ? 'bg-stone-700 text-white' 
                    : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                }`}
              >
                Table
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-stone-700 text-white' 
                    : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                }`}
              >
                Grid
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-sm text-stone-600">
        <div>
          Showing <span className="font-medium text-stone-900">{filteredUsers.length}</span> of <span className="font-medium text-stone-900">{users.length}</span> users
          {searchTerm && (
            <span> for &ldquo;<span className="font-medium text-stone-900">{searchTerm}</span>&rdquo;</span>
          )}
        </div>
        <div className="text-xs text-stone-500">
          {viewMode === 'table' ? 'Table View' : 'Grid View'}
        </div>
      </div>

      {/* User Display */}
      {filteredUsers.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-slate-400 text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">No users found</h3>
          <p className="text-slate-600">
            {searchTerm 
              ? `No users match &ldquo;${searchTerm}&rdquo;. Try a different search term.`
              : 'No users available at the moment.'
            }
          </p>
        </div>
      ) : viewMode === 'table' ? (
        <UserTable users={filteredUsers} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}