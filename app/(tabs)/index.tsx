import React from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Avatar,
  Container,
  Heading,
  Card,
  Checkbox,
  ScrollView,
  TextArea,
  Button,
} from "native-base";
import { Colors } from "@/constants/Colors";

export default function Home() {
  return (
    <ScrollView>
      <Container maxWidth={"100%"}>

        <HStack padding={4} marginBottom={4} justifyContent={'center'}>
          <Heading>Welcom back Emily!</Heading>
          <Box marginRight={2}>
            <Avatar size={'sm'}>EM</Avatar>
          </Box>
        </HStack>

        {/* Your goal */}
        <Box padding={4} width={'100%'} marginBottom={4}>
          <Heading>Set fitness goal this week</Heading>
          <TextArea autoCompleteType={true} marginBottom={4}  h={20} placeholder="I want to hit 10k steps this week" w="75%" maxW="300" />
          <Button backgroundColor={Colors.primaryBlue}>Save</Button>
        </Box>

        {/* MORNING HABITS */}
        <Box padding={4} marginBottom={4}>
          <Heading>Morning Habits</Heading>
          <Text marginBottom={4} >Morning habits are the cornerstone of a healthy lifestyle, setting the tone for your day and creating a foundation for achieving your fitness goals.</Text>

          <Card width={'100%'}>
            <Checkbox defaultIsChecked value="">
              Urinate first thing in the morning
            </Checkbox>
            <Checkbox defaultIsChecked value="">
              Check your current weight
            </Checkbox>
            <Checkbox defaultIsChecked value="">
              Drink your water in the morning
            </Checkbox>
          </Card>
        </Box>

       {/* MORNING HABITS */}
       <Box padding={4} marginBottom={4}>
          <Heading>Weekly Habits</Heading>
          <Text>Weekly habits provide consistency to your fitness journey, helping you build long-term healthy routines and effectively track your progress over time.</Text>

          <Card width={'100%'}>
            <Checkbox defaultIsChecked value="">
              Urinate first thing in the morning
            </Checkbox>
            <Checkbox defaultIsChecked value="">
              Check your current weight
            </Checkbox>
            <Checkbox defaultIsChecked value="">
              Drink your water in the morning
            </Checkbox>
          </Card>
        </Box>

      </Container>
    </ScrollView>
  );
}
