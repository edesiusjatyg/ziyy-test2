import { redirect } from 'next/navigation';

export default function Home() {
  // redirect('/login'); --> turned off for dev purposes
  redirect('/home');
}