"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  console.log(user);

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold text-center">Week 10 - Authentication using Firebase</h1>
      <p>
        {user ? (
          <button onClick={firebaseSignOut} className="bg-blue-600 hover:bg-blue-300 text-white p-4 rounded">Sign Out</button>
        ) : (
          <button onClick={gitHubSignIn} className="bg-blue-600 hover:bg-blue-300 text-white p-4 rounded">Sign In with Github</button>
        )}
      </p>
      {user && (
        <p>
          Welcome, {user.displayName}, Your email is {user.email}. Here is your
          image
          <img src={user.photoURL} alt={user.displayName} className="mx-auto rounded-full w-40 h-40 mb-4"/>
          <a href="/week-10/shopping-list" className="bg-green-600 hover:bg-green-300 text-white p-4 rounded">Go to Shopping List</a>
        </p>
        
      )}
    </div>
  );
}