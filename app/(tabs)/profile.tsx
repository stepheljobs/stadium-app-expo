import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Image,
  Button,
  ScrollView,
  Heading,
} from "native-base";
import QRCode from "react-native-qrcode-svg";
export default function ProfileScreen() {

  let logoFromFile = "../../assets/images/stadium-logo.png";

  return (
    <ScrollView>
      <Heading bg={"white"} padding={4} width={"100%"}>
        Profile
      </Heading>
      <Box flex={1} bg="white" safeArea>
        <VStack alignItems="center" p={4}>
          <Image
            size={100}
            borderRadius={100}
            source={{ uri: "../../assets/images/stadium-logo.png" }}
            alt="Alternate Text"
          />

          <Button size={"xs"} variant={'link'}>
          Edit Profile
          </Button>

          <Text paddingTop={4} fontSize="xl" fontWeight="bold">
            Emily Thompson
          </Text>

          <Text fontSize="md" color="coolGray.600">
            +63 901 234 5678
          </Text>

          <Box borderRadius={10} paddingTop={8}>
            <VStack space={4} alignItems="center">
              <Text fontSize="md">
                Tap your QR code to check-in
              </Text>
              <Box position="relative" width="250" height="250">
                <QRCode
                  size={250}
                  value="XTRM001"
                  logo={logoFromFile}
                  logoSize={70}
                  logoBackgroundColor="transparent"
                />
              </Box>
              <VStack space={2} w="100%">
                <Text>Gym Access Expiration: 04/30/2024</Text>
                <Text>Membership Expiration: 12/20/2024</Text>
              </VStack>
            </VStack>
          </Box>
          <Button
            marginTop={8}
            bg={"#354AD9"}
            _text={{
              color: "#FFFFFF",
            }}
            width={'50%'}
          >
            Log out
          </Button>
        </VStack>
      </Box>
    </ScrollView>
  );
}
