<<<<<<< Updated upstream
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
=======
// RootLayout.js

import { Stack, useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { NativeBaseProvider } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import SplashScreen from '@/components/SplashScreen';
import { auth } from '@/firebaseConfig';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter(); // Ensure useRouter is called only once and unconditionally

  useEffect(() => {
    // Simulate a splash screen or initial loading
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show splash screen for 3 seconds
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      const user = auth.currentUser;
      if (user) {
        // If the access token exists, redirect to the main application page
        router.replace('/');
      } else {
        // If the access token does not exist, redirect to the sign-in page
        router.replace('/auth/signin');
      }
    };

    // Only run the authentication check when loading is complete
    if (!isLoading) {
      checkAuth();
    }
  }, [isLoading, router]);

  if (isLoading) {
    return (
      <NativeBaseProvider>
        <SplashScreen />
      </NativeBaseProvider>
    );
>>>>>>> Stashed changes
  }

  return (
    <NativeBaseProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        <Stack.Screen
          name="edit"
          options={{
            title: 'EDIT PROFILE',
            headerTitleAlign: 'center', // Align title to center
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
