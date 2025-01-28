import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Don't render anything until fonts are loaded
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />{" "}
      {/* Dynamic status bar style */}
      <Stack>
        {/* Hide the header for the tabs layout */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Add a custom header for the not-found screen */}
        <Stack.Screen
          name="+not-found"
          options={{
            title: "Not Found",
            headerStyle: {
              backgroundColor: colorScheme === "dark" ? "#1a1a1a" : "#ffffff",
            },
            headerTintColor: colorScheme === "dark" ? "#ffffff" : "#000000",
          }}
        />

        {/* Add more screens with custom headers if needed */}
        <Stack.Screen
          name="auth/sign-in"
          options={{
            title: "Sign In",headerShown: false,
            headerStyle: {
              backgroundColor: colorScheme === "dark" ? "#1a1a1a" : "#ffffff",
            },
            headerTintColor: colorScheme === "dark" ? "#ffffff" : "#000000",
          }}
        />
        <Stack.Screen
          name="auth/sign-up"
          options={{
            title: "Sign Up",headerShown: false,
            headerStyle: {
              backgroundColor: colorScheme === "dark" ? "#1a1a1a" : "#ffffff",
            },
            headerTintColor: colorScheme === "dark" ? "#ffffff" : "#000000",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
