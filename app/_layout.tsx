import { Stack } from "expo-router";
import React, { useCallback, useState, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import { Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import LoadingScreen from "@/components/splashscreen";
// import LoginScreen from "./auth/signin";
// import EditProfile from "./profileScreen/edit";

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
      </Stack>
    </NativeBaseProvider>
  );
}
