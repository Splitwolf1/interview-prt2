'use client';

import Error from '@/components/Error';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

// Error boundary for the users page
export default function UsersError({ error, reset }: ErrorProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Users Dashboard</h1>
      <Error 
        message={error.message || 'Failed to load users'}
        retry={reset}
      />
    </div>
  );
}