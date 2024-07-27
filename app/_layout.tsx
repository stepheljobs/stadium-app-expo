import { Stack, router  } from "expo-router";
import React, { useCallback, useState, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import LoadingScreen from "@/components/splashscreen";

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);


  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return  <NativeBaseProvider>
      <LoadingScreen />;
    </NativeBaseProvider>;
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
