"use client";
import { ArrowLeft, Phone, Mail, Calendar, MapPin } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { mockClients } from "@/lib/clients";

export default function ClientDetails({}) {
  const { id } = useParams();
  const router = useRouter();
  const client = mockClients.find((c) => c.id === id);

  if (!client) {
    return (
      <div className="p-6 text-center">
        <p>Client non trouvé</p>
        <button
          onClick={() => router.back()}
          className="mt-4 text-purple cursor-pointer hover:underline"
        >
          Retour
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 cursor-pointer font-semibold text-purple hover:text-purple"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Retour à la liste</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {client.name}
              </h1>
              <p className="text-purple font-semibold mt-1">
                Identifiant: {client.id}
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-purple-100 rounded-full text-purple">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <p className="mt-1 text-gray-900">{client.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-purple-100 rounded-full text-purple">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Téléphone</h3>
                <p className="mt-1 text-gray-900">{client.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-purple-100 rounded-full text-purple">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Date de création
                </h3>
                <p className="mt-1 text-gray-900">
                  {new Date(client.createdAt).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-purple-100 rounded-full text-purple">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Adresse</h3>
                <p className="mt-1 text-gray-900">
                  123 Rue Example
                  <br />
                  75000 Paris, France
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Historique des interactions
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="border-l-4 border-purple-200 pl-4 py-2"
                >
                  <div className="flex justify-between">
                    <p className="font-medium">Appel téléphonique</p>
                    <p className="text-sm text-gray-500">
                      Il y a {item} jour{item > 1 ? "s" : ""}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Discussion sur la nouvelle offre de service. Client
                    intéressé.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
