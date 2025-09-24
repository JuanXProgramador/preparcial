import { fetcher } from "@/shared/services/http";

interface Organization {
    id: number,
    name: string,
    tipo: string,
}

interface Prizes {
    id: number,
    premiationDate: string,
    name: string,
    description: string,
    organization: Organization,
}

interface Editorial {
    id: number,
    name: string,
}

interface Book {
    id: number,
    name: string,
    isbn: string,
    image: string,
    publishingDate: string,
    description: string,
    editorial: Editorial,
}

export interface Authors {
    id: number,
    birthDate: string,
    name: string,
    description: string,
    image: string,
    books: Book[],
    prizes: Prizes[],
}

export const fetchAuthorsServices = (): Promise<Authors[]> => {
    return fetcher<Authors[]>("/api/authors")
}