"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const isAuthenticated =
      user?.email || (storedUser && JSON.parse(storedUser).email);

    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [user, router]);

  return children;
}
