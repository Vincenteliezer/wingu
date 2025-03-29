import React from "react";
import { StyleSheet, View } from "react-native";
import { useAuth } from "../context/auth";
import LoadingScreen from "../screens/loading-screen";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./root-stack";
import AuthStack from "./auth-stack";

const Navigation = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }
  
  return (
    <NavigationContainer>
      {user ? <RootStack /> : <AuthStack />}
    </NavigationContainer>
  );
};


export default Navigation;
