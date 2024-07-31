import { Stack, useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as Font from 'expo-font';
import { NativeBaseProvider } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '@/firebaseConfig';
import LoadingScreen from '../components/SplashScreen';

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const router = useRouter(); // Ensure useRouter is called only once and unconditionally

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

  useEffect(() => {
    if (appIsReady) {
      const checkAuth = async () => {
        const user = auth.currentUser;
        if (user) {
          // If the user is authenticated, redirect to the main application page
          router.replace('/');
        } else {
          // If the user is not authenticated, redirect to the sign-in page
          router.replace('/auth/signin');
        }
      };

      checkAuth();
    }
  }, [appIsReady, router]);

  if (!appIsReady) {
    return (
      <NativeBaseProvider>
        <LoadingScreen />
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
            title: 'EDIT PROFILE',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <Ionicons
                name="arrow-back"
                size={24}
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
