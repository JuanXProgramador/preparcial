// src/modules/providers/services/providerService.ts
import { fetcher } from "@/shared/services/http";
import { AuthorFormData } from "@/modules/crear/validation/authorSchema";
import useAuthors from "@/shared/hooks/useAuthors";
import { Authors } from "@/modules/authors/services/authorsService"; // Reutilizamos la interfaz

/**
 * Create a new service by sending the form data to the API.
 * @param data - The form data to create a new service validated by Zod.
 * @returns A promise that resolves with the newly created service from the backend.
 */

export function mapCreateAuthorToFull(createData: AuthorFormData, id: number): Authors {
  return {
    id: id,
    name: createData.name,
    description: createData.description,
    image: "/matt.jpg",
    birthDate: "", // Si no se proporciona, cadena vacía
    books: [], // Siempre vacío al crear
    prizes: [] // Siempre vacío al crear
  };
}