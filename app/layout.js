import { Montserrat, Roboto_Mono } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata = {
  title: "CLICRM",
  description: "CRM de gestion des clients",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${robotoMono.variable} antialiased`}
      >
        <AuthProvider>
          <ProtectedRoute>{children}</ProtectedRoute>
        </AuthProvider>
      </body>
    </html>
  );
}
