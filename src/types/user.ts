// User interface based on JSONPlaceholder API structure
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Form data interface for creating new users
export interface CreateUserData {
  name: string;
  email: string;
  phone: string;
  website?: string;
  company?: string;
}