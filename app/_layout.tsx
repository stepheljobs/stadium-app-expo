import { Stack, useNavigation, router  } from "expo-router";
import React, { useState, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import SplashScreen from "@/components/SplashScreen";

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
        <SplashScreen />
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        <Stack.Screen
          name="edit"
          options={{
            title: "EDIT PROFILE",
            headerTitleAlign: "center", // Align title to center
            headerLeft: () => (
              <Ionicons
                name="arrow-back" // Adjust icon name as needed
                size={24} // Adjust size as needed
                color="#000"
                onPress={() => router.replace('/profile')}
              />
            ),
          }}
        />
      </Stack>
    </NativeBaseProvider>
  );
}
