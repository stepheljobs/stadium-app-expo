import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Image,
  Button,
  ScrollView,
  Container,
  Flex,
} from "native-base";
import QRCode from "react-native-qrcode-svg";
import { color } from "native-base/lib/typescript/theme/styled-system";

export default function ProfileScreen() {
  let logoFromFile = "../../assets/images/stadium-logo.png";

  return (
    <ScrollView>
      <Box flex={1} bg="white" safeArea>
        <VStack space={4} alignItems="center" p={4}>
          <Image
            size={100}
            borderRadius={100}
            source={{ uri: "../../assets/images/stadium-logo.png" }}
            alt="Alternate Text"
          />
          <Button mt={4} bg={"#354AD9"} mb={4} size={"xs"}>
            Edit Profile
          </Button>

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

          <Box bg="#323232" borderRadius={10} p={4}>
            <VStack space={4} alignItems="center">
              <Text fontSize="lg" fontWeight="bold" color="white">
                Show QR Code to the Receptionist
              </Text>
              <Box position="relative" width="250" height="250">
                <QRCode
                  size={250}
                  value="XTRM001"
                  logo={logoFromFile}
                  logoBackgroundColor="transparent"
                />
              </Box>
              <VStack space={2} w="100%">
                <Text color="white">Gym Access Expiration: 04/30/2024</Text>
                <Text color="white">Membership Expiration: 12/20/2024</Text>
              </VStack>
            </VStack>
          </Box>

          <Button bg={"#F2F2F7"} _text={{
            color: '#354AD9'
          }}  w="100%" mt={4}>
            Log out
          </Button>
        </VStack>
      </Box>
    </ScrollView>
  );
}
