import React from "react";
import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

const LoadingScreen = () => {
  return (
    <SafeAreaProvider style={styles.base}>
      <ActivityIndicator color="black" size="large" />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});

export default LoadingScreen;
