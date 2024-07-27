import React from 'react';
import { Box, Image, VStack } from 'native-base';

const LoadingScreen = () => {
  return (
    <>
      <Box safeArea flex={1} bg="#4052B6" justifyContent="center" alignItems="center">
        <VStack space={4} alignItems="center">
          <Image 
            source={require('../assets/images/stadium-splash.svg')} 
            alt="Stadium Fitness Logo"
          />
        </VStack>
      </Box>
    </>
  );
};

export default LoadingScreen;
