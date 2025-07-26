import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchUserById } from '@/lib/fetchUserById';
import UserDetail from '@/components/UserDetail';

interface UserDetailPageProps {
  params: Promise<{ id: string }>;
}

// Server component for individual user detail page
export default async function UserDetailPage({ params }: UserDetailPageProps) {
  const { id } = await params;
  
  try {
    const user = await fetchUserById(id);
    
    return (
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/users"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Users
          </Link>
        </div>

        {/* User Detail Component */}
        <UserDetail user={user} />
      </div>
    );
  } catch (error) {
    // Handle 404 case specifically
    if (error instanceof Error && error.message === 'User not found') {
      notFound();
    }
    
    // Handle other errors
    throw error;
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }: UserDetailPageProps) {
  const { id } = await params;
  
  try {
    const user = await fetchUserById(id);
    return {
      title: `${user.name} - User Details`,
      description: `View details for ${user.name} (${user.email})`
    };
  } catch {
    return {
      title: 'User Not Found',
      description: 'The requested user could not be found'
    };
  }
}