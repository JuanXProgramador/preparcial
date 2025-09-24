// src/app/page.tsx
'use client';

import Card from "@/modules/authors/ui/Card"; // Imports the new Componet
import { useAuthorsServices } from "@/modules/authors/hooks/useAuthorsService"

export default function Authors() {

  const { authors, isLoading, error } = useAuthorsServices();

  if (isLoading) {
    return <div className="text-center p-8">Cargando servicios...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">{error}</div>;
  }


  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-4xl font-bold mb-12">Explora los autores!</h1>

      {/* We use a Tailwind grid to organize the cards. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {authors.map((author) => (
            <Card
                key={author.id} 
                title={`${author.name}`}
                description={`${author.description}`}
                imageUrl={`${author.image}`}
            />
        ) )}
      </div>
    </main>
  );
}