import type {User} from "@/types";

export const getUsers = async (): Promise<User[]> => {
    const response = await fetch(import.meta.env.VITE_API_URL + "/users");
    return await response.json();
}