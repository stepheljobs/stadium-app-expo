import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Avatar,
  Button,
} from "native-base";
import QRCode from "react-native-qrcode-svg";

export default function ProfileScreen() {

  return (
    <Box flex={1} bg="white" safeArea>
      <VStack space={4} alignItems="center" p={4}>

        <Avatar
          size="xl"
          source={{ uri: require('../../assets/images/stadium-logo.png') }}
        />
        <Text fontSize="xl" fontWeight="bold">
          Emily Thompson
        </Text>
        <Text fontSize="md" color="coolGray.600">
          +63 901 234 5678
        </Text>

        <HStack space={8} justifyContent="center" mt={2}>
          <VStack alignItems="center">
            <Text fontSize="2xl" fontWeight="bold">
              246
            </Text>
            <Text fontSize="sm" color="coolGray.500">
              Total calories
            </Text>
          </VStack>
          <VStack alignItems="center">
            <Text fontSize="2xl" fontWeight="bold">
              682
            </Text>
            <Text fontSize="sm" color="coolGray.500">
              Followers
            </Text>
          </VStack>
        </HStack>

        <VStack space={4} alignItems="center">
          <Text fontSize="lg" fontWeight="bold">
            Show QR Code to the Receptionist
          </Text>
          <Box position="relative" width="250" height="250">
            <QRCode
              size={250}
              value="XTRM001"
              logo={require('../../assets/images/stadium-logo.png')}
              logoBackgroundColor='transparent'
            />
          </Box>
          <VStack space={2} w="100%">
            <Text>Gym Access Expiration: 04/30/2024</Text>
            <Text>Membership Expiration: 12/20/2024</Text>
          </VStack>
        </VStack>

        <Button variant="outline" colorScheme="blue" w="100%" mt={4}>
          Log out
        </Button>
      </VStack>
    </Box>
  );
}
