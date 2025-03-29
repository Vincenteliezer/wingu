import { PaperProvider } from "react-native-paper";
import Navigation from "./src/navigation/navigation";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { AuthProvider } from "./src/context/auth";

export default function App() {
  const [loaded] = useFonts({
    Medium: require("./assets/fonts/Rajdhani-Medium.ttf"),
    Light: require("./assets/fonts/Rajdhani-Light.ttf"),
    Regular: require("./assets/fonts/Rajdhani-Regular.ttf"),
    SemiBold: require("./assets/fonts/Rajdhani-SemiBold.ttf"),
    Bold: require("./assets/fonts/Rajdhani-Bold.ttf"),
  });

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
      await new Promise((resolve) => setTimeout(resolve, 3000));

      if (loaded) {
        await SplashScreen.hideAsync();
      }
    };
    prepare();
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </PaperProvider>
  );
}
