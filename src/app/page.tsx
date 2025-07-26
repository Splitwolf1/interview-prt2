import { redirect } from 'next/navigation';

// Homepage redirects to /users as per requirements
export default function Home() {
  redirect('/users');
}
