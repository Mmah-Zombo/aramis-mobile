import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "../global.css";

import { useColorScheme } from "@/hooks/use-color-scheme";

// Remove unstable_settings if no tabs are used

export default function AuthLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="SignupScreen" options={{ title: "Sign Up" }} />
        <Stack.Screen name="SigninScreen" options={{ title: "Sign In" }} />
        <Stack.Screen
          name="OTPVerificationScreen"
          options={{ title: "OTP Verification" }} // Add with appropriate title
        />
        <Stack.Screen
          name="VerificationSuccessScreen"
          options={{ title: "Verification Success" }} // Add with appropriate title
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
