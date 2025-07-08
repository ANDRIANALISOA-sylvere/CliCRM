"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export function AddClientDialog({ addNewClient }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = {
      ...formData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    addNewClient(newClient);
    setOpen(false);
    setFormData({ name: "", email: "", phone: "" });
    toast.success("Client enregistrer avec succès!");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 cursor-pointer bg-purple hover:bg-[#1B3C53] text-white font-medium rounded-lg px-4 py-2.5 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#1B3C53] focus:ring-opacity-50">
          <Plus className="h-5 w-5" />
          <span className="text-sm">Nouveau client</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white p-6 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">
            Ajouter un nouveau client
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900"
            >
              Nom complet
            </label>
            <input
              id="name"
              name="name"
              placeholder="John Doe"
              required
              className="mt-1 block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#456882] sm:text-sm"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              className="mt-1 block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#456882] sm:text-sm"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-900"
            >
              Téléphone
            </label>
            <input
              id="phone"
              name="phone"
              placeholder="06 12 34 56 78"
              required
              className="mt-1 block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#456882] sm:text-sm"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex-1 justify-center cursor-pointer rounded-md bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="flex-1 justify-center cursor-pointer rounded-md bg-purple px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#3A576F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3A576F]"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </DialogContent>
      <Toaster position="top-center" reverseOrder={false} />
    </Dialog>
  );
}
