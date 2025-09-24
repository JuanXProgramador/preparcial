// src/hooks/useStudentServices.ts
"use client"; // Hooks that use useState/useEffect should be for the client.

import { useState, useEffect } from "react";
import { Authors, fetchAuthorsServices } from "@/modules/authors/services/authorsService";
import useAuthors from "@/shared/hooks/useAuthors";

export function useAuthorsServices() {
  const { authors, setAuthors, addAuthor, editAuthor, findAuthorById, incrementId } = useAuthors();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAuthors = async () => {
      try {
        // We reset the status with each new load
        if (authors.length === 0) {
                    setIsLoading(true);
        setError(null);
        const data = await fetchAuthorsServices();
        setAuthors(data);
        } else {
            setIsLoading(false)
        }

      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Ocurrió un error desconocido.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadAuthors();
  }, []); // Empty array so that it runs only once.

  // We return the state and, potentially, functions to reload.
  return { authors, isLoading, error, addAuthor, incrementId};
}