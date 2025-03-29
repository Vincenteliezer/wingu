export type LoginCredentials = {
  email: string;
  password: string;
  device_name: string;
};

export interface AuthProviderProps {
  children: React.ReactNode;
}
