// app/login/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // Redirect langsung ke backend OAuth endpoint
    window.location.href = "https://express-google-auth.vercel.app/auth/google";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Login with Google</h1>
      <button
        onClick={handleLogin}
        className="w-full max-w-xs bg-red-500 text-white py-2 rounded"
      >
        Login with Google
      </button>
    </div>
  );
}
