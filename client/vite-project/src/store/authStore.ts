import { create } from "zustand";
import axios from "axios";

interface User {
  id: number;
  username: string;
  email: string;
}

interface LoginRequest {
  username: string;
  password: string;
}

interface authStore {
  user: User | null;
  loading: boolean;
  error: string | null;

  login: (credentials: LoginRequest) => Promise<void>;
}

export const useAuthStore = create<authStore>((set) => ({
  user: null,
  loading: false,
  error: null,

  login: async (credentials) => {
    try {
      set({
        loading: true,
        error: null,
      });

      await axios.post("http://localhost:8080/auth/login", credentials);

      set({
        loading: false,
        error: null,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        set({
          loading: false,
          error: "Login failed, please check your crendentials and try again.",
        });
      }
    }
  },
}));
