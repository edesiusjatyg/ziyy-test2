import { auth } from "@/auth";
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth();
  
  if (session) {
    // User is authenticated, redirect to home dashboard
    redirect('/home');
  } else {
    // User is not authenticated, redirect to sign-in
    redirect('/signin');
  }
}