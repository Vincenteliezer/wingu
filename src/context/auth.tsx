import { createContext, useContext, useEffect, useState } from "react";
import axios from "../lib/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL, device_name } from "../config/app-config";
import { AuthContextType } from "../types/auth-context";
import { AuthProviderProps, LoginCredentials } from "../types/auth";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadToken = async () => {
      setIsLoading(true);
      try {
        const storedToken = await AsyncStorage.getItem("Bearer");
        if (storedToken) {
          setUser(storedToken);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      } catch (error: any) {
        setError(error);
        setIsLoading(false);
      }
    };
    loadToken();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/mobile-login`, {
        ...credentials,
        device_name,
      });

      if (response.data.response.Bearer) {
        const token = response.data.response.Bearer;
        setUser(token);
        await AsyncStorage.setItem("Bearer", token);
        setIsLoading(false);
      } else {
        setError(response.data.error);
        setIsLoading(false);
      }
    } catch (error: any) {
      setError(error);
      setIsLoading(false);
    }
  };

  //   useEffect(() => {
  //     const unsubscribe = NetInfo.addEventListener((state) => {
  //       setIsConnected(state.isConnected);
  //     });

  //     return () => unsubscribe();
  //   }, []);

  const logout = async () => {
    setIsLoading(true);
    try {
      await AsyncStorage.removeItem("Bearer");
      setUser(null);
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
      setIsLoading(false);
    }
  };

  const resetError = () => {
    setError(null);
  };


  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        login,
        isLoading,
        logout,
        resetError,
        BASE_URL,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
