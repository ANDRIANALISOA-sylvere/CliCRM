"use client";
import { AddClientDialog } from "@/components/AddClientDialog";
import { ClientsTable } from "@/components/ClientsTable";
import { Sidebar } from "@/components/Sidebar";
import { mockClients } from "@/lib/clients";
import { useEffect, useState } from "react";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients(mockClients);
  }, []);

  const addNewClient = (newClient) => {
    setClients(prevClients => [...prevClients, newClient]);
  };
  return (
    <Sidebar>
      <div className="p-8">
        <h2 className="text-2xl font-bold text-orange-300">
          Gestion des clients
        </h2>
        <div className="mt-5">
          <AddClientDialog addNewClient={addNewClient}></AddClientDialog>
          <ClientsTable clients={clients}></ClientsTable>
        </div>
      </div>
    </Sidebar>
  );
}
