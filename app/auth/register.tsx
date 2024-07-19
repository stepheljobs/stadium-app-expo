import React from 'react';
import { Box, Text, VStack, FormControl, Input, Link, Button, HStack, Center, Icon, Pressable } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export default function RegisterScreen() {
  return (
    <Center flex={1} px="3">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <VStack space={3} mt="5">
          <Text fontSize="3xl" fontWeight="bold">
            Welcome to Stadium Fitness!
          </Text>
          <Text fontSize="md" color="coolGray.500">
            Register now and be a member
          </Text>
          <FormControl>
            <Input placeholder="Full name" />
          </FormControl>
          <FormControl>
            <Input placeholder="Email address" />
          </FormControl>
          <FormControl>
            <Input
              type="password"
              placeholder="Password"
              InputRightElement={
                <Pressable>
                  <Icon
                    as={<MaterialIcons name="visibility-off" />}
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }
            />
          </FormControl>
          <Text fontSize="xs" color="coolGray.600" mt="1">
            By continuing, I agree to the{' '}
            <Link _text={{ color: 'indigo.500' }}>Terms and Conditions</Link> and
            acknowledge the{' '}
            <Link _text={{ color: 'indigo.500' }}>Privacy Policy</Link>.
          </Text>
          <Button mt="2" colorScheme="indigo">
            Continue
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600">
              or
            </Text>
          </HStack>
          <HStack space={3} justifyContent="center">
            <Pressable>
              <Icon as={MaterialIcons} name="apple" color="black" size="md" />
            </Pressable>
            <Pressable>
              <Icon as={MaterialIcons} name="facebook" color="blue.500" size="md" />
            </Pressable>
            <Pressable>
              <Icon as={MaterialIcons} name="google" color="red.500" size="md" />
            </Pressable>
          </HStack>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600">
              Already a member?{' '}
            </Text>
            <Link _text={{ color: 'indigo.500', fontWeight: 'medium', fontSize: 'sm' }}>
              Log in
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}