"use client";
import React from "react";
import { UsersRound } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email }));
    router.push("/");
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex items-center justify-center gap-4">
            <UsersRound className="h-10 w-auto text-purple text-center"></UsersRound>
            <span className="font-bold text-xl">CLICRM</span>
          </div>
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Connectez avec votre compte
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form method="POST" onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#456882] sm:text-sm/6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Mot de passe
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-purple hover:text-[#6A8BA8]"
                  >
                    Mot de passe oublié?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#456882] sm:text-sm/6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={6}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md cursor-pointer bg-purple px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#3A576F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3A576F]"
              >
                Se connecter
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Vous n'avez pas encore de compte?{" "}
            <a
              href="#"
              className="font-semibold text-purple hover:text-[#6A8BA8]"
            >
              S'inscrire
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
