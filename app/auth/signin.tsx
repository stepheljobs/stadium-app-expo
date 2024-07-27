import React from 'react';
import { Box, Text, VStack, FormControl, Input, Link, Button, HStack, Center, Pressable, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export default function LoginScreen() {
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
            <Input placeholder="Email address" />
          </FormControl>
          <FormControl>
            <Input
              type="password"
              placeholder="Password"
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
          <Button mt="2" colorScheme="indigo">
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
              href='./register'
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