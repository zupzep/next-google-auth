// app/login/page.tsx
"use client";

import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function LoginPage() {
  const handleSuccess = async (credentialResponse: any) => {
    if (!credentialResponse?.credential) return;

    try {
      const res = await axios.post(
        "http://localhost:4000/auth/google",
        { token: credentialResponse.credential },
        { withCredentials: true }
      );
      localStorage.setItem("token", res.data.token);
      console.log("Login berhasil:", res.data.user.name);
    } catch (err) {
      console.error("Login gagal:", err);
    }
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleSuccess}
      />
    </div>
  );
}