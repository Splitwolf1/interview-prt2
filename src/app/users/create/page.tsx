'use client';

import { useState } from 'react';
import Link from 'next/link';
import CreateUserForm from '@/components/CreateUserForm';
import { CreateUserData } from '@/types/user';

// Client component for create user page with form handling
export default function CreateUserPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleSubmit = async (data: CreateUserData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      // Simulate API call delay for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would make an API call here
      console.log('User data to submit:', data);
      
      setSubmitMessage({
        type: 'success',
        text: `User "${data.name}" has been created successfully! This is a demo form.`
      });
      
      // Reset form would happen here in real implementation
    } catch {
      setSubmitMessage({
        type: 'error',
        text: 'Failed to create user. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      {/* Navigation */}
      <div className="mb-6">
        <Link
          href="/users"
          className="inline-flex items-center px-4 py-2 text-white font-medium rounded-lg"
          style={{ backgroundColor: '#7fd4e1' }}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Users
        </Link>
      </div>

      {/* Success/Error Messages */}
      {submitMessage && (
        <div className={`mb-6 p-4 rounded-lg ${
          submitMessage.type === 'success' 
            ? 'bg-green-50 border border-green-200 text-green-800' 
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          <div className="flex items-center">
            <span className="mr-2">
              {submitMessage.type === 'success' ? '✅' : '❌'}
            </span>
            {submitMessage.text}
          </div>
        </div>
      )}

      {/* Form Container */}
      <div className="relative">
        {isSubmitting && (
          <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span className="text-slate-600">Creating user...</span>
            </div>
          </div>
        )}
        
        <CreateUserForm onSubmit={handleSubmit} />
      </div>

      {/* Demo Notice */}
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Demo Note:</strong> This is a demonstration form. No actual users will be created or stored. 
          In a real application, this would submit to an API endpoint.
        </p>
      </div>
    </div>
  );
}