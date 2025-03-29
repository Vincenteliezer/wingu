import { LoginCredentials } from "./auth";

export interface AuthContextType {
  user: string | null;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  isLoading: boolean;
  logout: () => Promise<void>;
  resetError: () => void;
  BASE_URL: string;
}
