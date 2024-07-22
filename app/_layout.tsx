import { Stack } from "expo-router";
import React, { useState, useEffect } from "react";
import { NativeBaseProvider } from "native-base";

import SplashScreen from "@/components/SplashScreen";
import LoginScreen from "./auth/signin";

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show splash screen for 3 seconds
  }, []);

  if (isLoading) {
    return (
      <NativeBaseProvider>
        <SplashScreen />;
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
      </Stack>
    </NativeBaseProvider>
  );
}
