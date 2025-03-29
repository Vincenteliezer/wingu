import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BottomTabs from "./bottom-tabs";

const RootStackLayout = createNativeStackNavigator();

const RootStack = () => {
  return (
    <RootStackLayout.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "SemiBold",
        },
        statusBarBackgroundColor: "white",
      }}
    >
      <RootStackLayout.Screen name="Baridi Wingu" component={BottomTabs} />
    </RootStackLayout.Navigator>
  );
};

export default RootStack;
