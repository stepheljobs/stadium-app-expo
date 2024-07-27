import React from 'react';
import { Box, Text, VStack, FormControl, Input, Button } from 'native-base';

export default function EditProfileScreen() {
  return (
    <VStack space={4} alignItems="center" p={4}>
      <FormControl>
        <FormControl.Label>Name</FormControl.Label>
        <Input />
      </FormControl>
      <FormControl>
        <FormControl.Label>Age</FormControl.Label>
        <Input />
      </FormControl>
      <FormControl>
        <FormControl.Label>Height</FormControl.Label>
        <Input />
      </FormControl>
      <FormControl>
        <FormControl.Label>Weight</FormControl.Label>
        <Input />
      </FormControl>
      <Button bg={"#354AD9"} size={"xs"}>
        Save Changes
      </Button>
    </VStack>
  );
}
