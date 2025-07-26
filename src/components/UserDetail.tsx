import { User } from '@/types/user';

interface UserDetailProps {
  user: User;
}

// Detailed user information component
export default function UserDetail({ user }: UserDetailProps) {
  return (
    <div className="bg-stone-50 rounded-lg border border-stone-200 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900 mb-2">{user.name}</h1>
        <p className="text-stone-600 text-lg">@{user.username}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Contact Information</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-stone-700">Email</label>
              <p className="text-stone-900">{user.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700">Phone</label>
              <p className="text-stone-900">{user.phone}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700">Website</label>
              <p className="text-stone-900">{user.website}</p>
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div>
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Address</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-stone-700">Street</label>
              <p className="text-stone-900">{user.address.street}, {user.address.suite}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700">City</label>
              <p className="text-stone-900">{user.address.city}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700">Zipcode</label>
              <p className="text-stone-900">{user.address.zipcode}</p>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Company</h2>
          <div className="bg-white rounded-lg p-6 border border-stone-200">
            <h3 className="text-lg font-medium text-stone-900 mb-2">{user.company.name}</h3>
            <p className="text-stone-700 mb-2 italic">&ldquo;{user.company.catchPhrase}&rdquo;</p>
            <p className="text-stone-600 text-sm">{user.company.bs}</p>
          </div>
        </div>
      </div>
    </div>
  );
}