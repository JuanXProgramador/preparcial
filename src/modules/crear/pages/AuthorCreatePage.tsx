// src/modules/providers/pages/ServiceCreatePage.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import AuthorForm from "@/modules/crear/ui/AuthorForm";
import { AuthorFormData } from "@/modules/crear/validation/authorSchema";
import  { useAuthorsServices }  from "@/modules/authors/hooks/useAuthorsService";
import { mapCreateAuthorToFull } from "../services/crearService";


export default function AuthorCreatePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Get the router to redirect
  const { authors, addAuthor, incrementId} = useAuthorsServices(); 

  const handleCreateAuthor = async (data: AuthorFormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      // Generar un ID único (puedes usar una lógica más sofisticada)
      
      // Mapear los datos del formulario al formato completo
      const fullAuthor = mapCreateAuthorToFull(data, incrementId());
      
      // Usar la función del hook para agregar el autor
      addAuthor(fullAuthor);
      console.log(authors)
      // Redirigir después del éxito
      router.push("/authors");
      
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Ocurrió un error mientras se creaba el autor."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Crear Nuevo Autor</h1>
      <AuthorForm onSubmit={handleCreateAuthor} isSubmitting={isSubmitting} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}