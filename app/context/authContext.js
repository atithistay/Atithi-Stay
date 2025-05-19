// components/AuthProvider.tsx
"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export default function AuthProvider({ children, initialAuth }) {
  const [auth, setAuth] = useState(initialAuth);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
