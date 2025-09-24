//src/modules/providers/ui/ServiceForm.tsx
"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  authorSchema,
  AuthorFormData,
} from "@/modules/crear/validation/authorSchema";

interface AuthorFormProps {
  onSubmit: SubmitHandler<AuthorFormData>;
  defaultValues?: AuthorFormData;
  isSubmitting: boolean;
}

export default function AuthorForm({
  onSubmit,
  defaultValues,
  isSubmitting,
}: AuthorFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthorFormData>({
    resolver: zodResolver(authorSchema),
    defaultValues: {
      requires_approval: false,
      ...defaultValues,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block font-medium">
           Nombre del autor
        </label>
        <input
          id="name"
          {...register("name")}
          className="w-full p-2 border rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block font-medium">
          Descripción
        </label>
        <textarea
          id="description"
          {...register("description")}
          className="w-full p-2 border rounded"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-yellow-400 text-black font-bold py-2 px-6 rounded hover:bg-yellow-500 disabled:bg-gray-300"
      >
        {isSubmitting ? "Guardando..." : "Guardar Autor"}
      </button>
    </form>
  );
}
