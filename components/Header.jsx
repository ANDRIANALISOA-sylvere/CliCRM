"use client";
import { useAuth } from "@/context/AuthContext";

export const Header = () => {
  const { user } = useAuth();

  return (
    <div className="flex items-center justify-end p-4 bg-white border-b border-gray-200">
      {user?.email && (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
            {user.email.charAt(0).toUpperCase()}
          </div>
          <span className="text-sm font-medium text-gray-700">
            {user.email}
          </span>
        </div>
      )}
    </div>
  );
};
