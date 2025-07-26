import Link from 'next/link';

// Not found page for invalid user IDs
export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🚫</div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">User Not Found</h1>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          The user you&rsquo;re looking for doesn&rsquo;t exist or may have been removed.
        </p>
        <div className="space-x-4">
          <Link
            href="/users"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Users
          </Link>
          <Link
            href="/"
            className="inline-block px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}