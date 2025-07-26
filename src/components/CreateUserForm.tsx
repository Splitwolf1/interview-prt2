'use client';

import { useState } from 'react';
import { CreateUserData } from '@/types/user';

interface CreateUserFormProps {
  onSubmit: (data: CreateUserData) => void;
}

// Form component for creating new users with validation
export default function CreateUserForm({ onSubmit }: CreateUserFormProps) {
  const [formData, setFormData] = useState<CreateUserData>({
    name: '',
    email: '',
    phone: '',
    website: '',
    company: ''
  });
  
  const [errors, setErrors] = useState<Partial<CreateUserData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<CreateUserData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof CreateUserData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-stone-50 rounded-lg border border-stone-200 p-8">
      <h2 className="text-2xl font-bold text-stone-900 mb-6">Create New User</h2>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white ${
              errors.name ? 'border-red-500' : 'border-stone-300'
            }`}
            placeholder="Enter full name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white ${
              errors.email ? 'border-red-500' : 'border-stone-300'
            }`}
            placeholder="Enter email address"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white ${
              errors.phone ? 'border-red-500' : 'border-stone-300'
            }`}
            placeholder="Enter phone number"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="website" className="block text-sm font-medium text-stone-700 mb-2">
            Website
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
            placeholder="Enter website URL"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-stone-700 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
            placeholder="Enter company name"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 text-white py-2 px-4 rounded-md"
            style={{ backgroundColor: '#4b9fc3' }}
          >
            Create User
          </button>
          <button
            type="button"
            onClick={() => setFormData({ name: '', email: '', phone: '', website: '', company: '' })}
            className="px-4 py-2 border border-stone-300 text-stone-700 rounded-md hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 transition-colors"
          >
            Clear
          </button>
        </div>
      </div>
    </form>
  );
}