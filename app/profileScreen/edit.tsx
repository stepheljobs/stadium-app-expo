import React from 'react';
import { Box, VStack, HStack, Text, Image, Input, IconButton } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const EditProfile = () => {
  return (
    <Box flex={1} bg="white" safeArea p={4}>
      <HStack space={4} alignItems="center" justifyContent="space-between" py={2}>
        <IconButton
          icon={<MaterialIcons name="arrow-back" size={24} color="black" />}
          onPress={() => {}}
        />
        <Text fontSize="xl" fontWeight="bold">
          Edit Profile
        </Text>
        <Box width={24}></Box>
      </HStack>
      <VStack space={4} alignItems="center">
        <Image
          size={100}
          borderRadius={100}
          source={{ uri: "../../assets/images/stadium-logo.png" }}
          alt="Alternate Text"
        />
        <Input placeholder="Name" />
        <Input placeholder="Age" />
        <Input placeholder="Height" />
        <Input placeholder="Weight" />
      </VStack>
    </Box>
  );
};

export default EditProfile;
