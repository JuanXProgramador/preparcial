import { useState } from "react";
import { Authors } from "@/modules/authors/services/authorsService"

export default function useAuthors() {
  const [id, setId] = useState<number>(1);
  const [authors, setAuthors] = useState<Authors[]>([]);

  const incrementId = () => {
    setId(id + 1);
    return id;
  };

  const addAuthor = (author: Authors) => {
    setAuthors([...authors, author]);
  };

    const findAuthorById = (id: number): Authors | undefined => {
        return authors.find(author => author.id === id);
    };

  // Función para editar nombre y descripción de un autor
    const editAuthor = (id: number, name: string, description: string): boolean => {
    const authorExists = authors.some(author => author.id === id);
    
    if (!authorExists) {
      return false; // El autor no existe
    }
    
    return true; // Edición exitosa
    };

  return { authors, setAuthors, addAuthor, editAuthor, findAuthorById, incrementId };
}