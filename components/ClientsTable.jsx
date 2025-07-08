"use client";
import { Eye, Search, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export function ClientsTable({ clients: initialClients }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const clientsPerPage = 10;

  const filteredClients = initialClients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = filteredClients.slice(
    indexOfFirstClient,
    indexOfLastClient
  );
  const totalPages = Math.ceil(filteredClients.length / clientsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleViewClientDetails = (id) => {
    router.push(`/clients/${id}`);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6">
      <div className="relative flex-1 mt-4 w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Rechercher par nom ou email..."
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#456882] focus:border-transparent sm:text-sm"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
        <div className="bg-white">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Nom
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Email
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Téléphone
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {currentClients.length > 0 ? (
                currentClients.map((client) => (
                  <tr key={client.id}>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {client.name}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {client.email}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {client.phone}
                    </td>
                    <td className="relative py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <button
                        onClick={() => handleViewClientDetails(client.id)}
                        className="inline-flex items-center rounded-md bg-orange-50 cursor-pointer px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20 hover:bg-orange-100"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Voir détails
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="px-3 py-4 text-sm text-center text-gray-500"
                  >
                    Aucun client trouvé
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {totalPages > 1 && (
        <nav className="flex items-center justify-between px-4 sm:px-0">
          <div className="hidden md:block">
            <p className="text-sm text-gray-700">
              Affichage{" "}
              <span className="font-medium">{indexOfFirstClient + 1}</span> à{" "}
              <span className="font-medium">
                {Math.min(indexOfLastClient, filteredClients.length)}
              </span>{" "}
              sur <span className="font-medium">{filteredClients.length}</span>{" "}
              clients
            </p>
          </div>
          <ul className="flex justify-center gap-1 text-gray-900">
            <li>
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`grid size-8 place-content-center rounded border transition-colors ${
                  currentPage === 1
                    ? "border-gray-200 text-gray-400 cursor-not-allowed"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
                aria-label="Page précédente"
              >
                <ChevronLeft className="size-4" />
              </button>
            </li>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <li key={number}>
                  <button
                    onClick={() => paginate(number)}
                    className={`block size-8 rounded border text-center text-sm/8 font-medium transition-colors ${
                      currentPage === number
                        ? "border-[#456882] bg-[#456882] text-white"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {number}
                  </button>
                </li>
              )
            )}

            <li>
              <button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`grid size-8 place-content-center rounded border transition-colors ${
                  currentPage === totalPages
                    ? "border-gray-200 text-gray-400 cursor-not-allowed"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
                aria-label="Page suivante"
              >
                <ChevronRight className="size-4" />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
