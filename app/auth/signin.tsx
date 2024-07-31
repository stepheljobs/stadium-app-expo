import React, { useState } from "react";
import {
  Box,
  Text,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  Pressable,
  Icon,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { auth } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const logIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        user.getIdToken().then(async (accessToken) => {
          if (accessToken) {
            router.push("/")
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <Center flex={1} px="3">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <VStack space={3} mt="5">
          <Text fontSize="3xl" fontWeight="bold">
            Login
          </Text>
          <Text fontSize="md" color="coolGray.500">
            Enter your credentials to login
          </Text>
          <FormControl>
            <Input placeholder="Email address" onChangeText={setEmail} />
          </FormControl>
          <FormControl>
            <Input
              type="password"
              placeholder="Password"
              onChangeText={setPassword}
              InputRightElement={
                <Icon
                  as={<MaterialIcons name="visibility-off" />}
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              }
            />
          </FormControl>
          <Link
            _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500",
            }}
            alignSelf="flex-end"
            mt="1"
          >
            Forgot password?
          </Link>
          <Button mt="2" colorScheme="indigo" onPress={logIn}>
            Continue
          </Button>
          <Button
            mt="2"
            variant="outline"
            colorScheme="indigo"
            leftIcon={<Icon as={MaterialIcons} name="qr-code" size="sm" />}
          >
            Quick Access to your Gym Pass
          </Button>
          {/* <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600">
              or
            </Text>
          </HStack> */}
          {/* <HStack space={3} justifyContent="center">
            <Pressable>
              <Icon as={MaterialIcons} name="apple" color="black" size="md" />
            </Pressable>
            <Pressable>
              <Icon as={MaterialIcons} name="facebook" color="blue.500" size="md" />
            </Pressable>
            <Pressable>
              <Icon as={MaterialIcons} name="google" color="red.500" size="md" />
            </Pressable>
          </HStack> */}
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600">
              Not a member?{" "}
            </Text>
            <Link
              href="./register"
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
            >
              Sign up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
