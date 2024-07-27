import React from 'react';
import { Box, Image, VStack, Text } from 'native-base';
import { StatusBar } from 'expo-status-bar';

const SplashScreen = () => {
  return (
    <>
      <Box safeArea flex={1} bg="#4052B6" justifyContent="center" alignItems="center">
        <VStack space={4} alignItems="center">
          <Image 
            source={require('../assets/images/splash-stadium.png')} 
            alt="Stadium Fitness Logo"
            // size="xl"
          />
        </VStack>
      </Box>
    </>
  );
};

export default SplashScreen;