import { User } from '@/types/user';

// Fetch a single user by ID from JSONPlaceholder API
export async function fetchUserById(id: string): Promise<User> {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      // Enable caching for better performance
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('User not found');
      }
      throw new Error(`Failed to fetch user: ${response.status}`);
    }
    
    const user: User = await response.json();
    return user;
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    throw error;
  }
}