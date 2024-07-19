import React from 'react';
import { Box, Image, VStack, Text } from 'native-base';
import { StatusBar } from 'expo-status-bar';

const SplashScreen = () => {
  return (
    <>
      <StatusBar style="light" />
      <Box safeArea flex={1} bg="#4052B6" justifyContent="center" alignItems="center">
        <VStack space={4} alignItems="center">
          <Image 
            source={require('../assets/images/react-logo.png')} 
            alt="Stadium Fitness Logo"
            size="xl"
          />
          <Text color="white" fontSize="3xl" fontWeight="bold">
            STADIUM
          </Text>
          <Text color="white" fontSize="3xl" fontWeight="bold">
            FITNESS
          </Text>
        </VStack>
      </Box>
    </>
  );
};

export default SplashScreen;