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
import { Pressable } from "react-native";
import { Link } from "expo-router";
import QRCode from "react-native-qrcode-svg";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useRouter } from "expo-router";

let logoFromFile = '../../assets/images/stadium-logo.png';

export default function ProfileScreen() {
  const router = useRouter();

  const logout = async () => {
    //sign out from Firebase
    signOut(auth).then(() => {
      // Sign-out successful.
      router.push("/auth/signin")
    }).catch((error) => {
      console.error("Logout error:", error);
    });
  };


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

          <Link href="../edit" asChild>
            <Pressable>
              <Button size={"xs"} variant={"link"}>
                Edit Profile
              </Button>
            </Pressable>
          </Link>

          <Text paddingTop={4} fontSize="xl" fontWeight="bold">
            Emily Thompson
          </Text>

          <Text fontSize="md" color="coolGray.600">
            +63 901 234 5678
          </Text>

          <Box borderRadius={10} paddingTop={8}>
            <VStack space={4} alignItems="center">
              <Text fontSize="md">Tap your QR code to check-in</Text>
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
            onPress={logout}
            marginTop={8}
            _text={{
              color: "#FFFFFF",
            }}
            width={"50%"}
            bg={"#354AD9"}
            w="100%"
          >
            Log out
          </Button>
        </VStack>
      </Box>
    </ScrollView>
  );
}
