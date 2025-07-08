"use client";
import { Home, Users, LogOut, UsersRound } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Header } from "./Header";
import { useAuth } from "@/context/AuthContext";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Clients", href: "/clients", icon: Users },
];

export function Sidebar({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <div className="flex h-screen bg-orange-50">
      <div className="w-64 bg-purple text-purple-50 flex flex-col">
        <div className="flex items-center gap-2 p-4 border-b border-[#2a4b64]">
          <UsersRound className="h-10 w-auto text-[#1B3C53] text-center" />
          <h1 className="text-xl font-bold">CLICRM</h1>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-[#1B3C53] text-purple-100"
                    : "text-purple-200 hover:bg-[#5f798b] hover:text-white"
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" strokeWidth={2} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[#2a4b64]">
          <button
            onClick={handleLogout}
            className="flex w-full items-center px-3 py-2 rounded-md cursor-pointer text-sm font-medium text-purple-200 hover:bg-[#1B3C53] hover:text-white"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Déconnexion
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto p-4">{children}</div>
      </div>
    </div>
  );
}
