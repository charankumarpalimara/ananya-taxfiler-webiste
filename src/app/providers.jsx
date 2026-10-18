"use client";

import { AuthProvider } from "../context/AuthContext";
import { RegisterModalProvider } from "../context/RegisterModalContext";

export function Providers({ children }) {
  return (
    <AuthProvider>
      <RegisterModalProvider>
        {children}
      </RegisterModalProvider>
    </AuthProvider>
  );
}
