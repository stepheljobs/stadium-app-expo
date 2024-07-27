import React, { useState } from "react";
import {
  FlatList,
  Box,
  HStack,
  VStack,
  Text,
  Avatar,
  Input,
  Button,
  Container,
  Heading,
  View,
} from "native-base";

const FitnessFeedItem = ({ item, onComment }: any) => {
  const [comment, setComment] = useState("");

  return (
    <Box
      padding={4}
      borderBottomWidth={1}
      borderColor="coolGray.200"
      width={"100%"}
    >
      <HStack space={3} justifyContent="space-between">
        <Avatar size="sm" source={{ uri: item.avatar }} />
        <VStack flex={1}>
          <HStack>
            <Text paddingRight={2} bold>
              {item.name}
            </Text>
            <Text color="coolGray.500">@{item.username}</Text>
          </HStack>
          <Text mt={1}>{item.content}</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default function FitnessFeed() {
  const [feedItems, setFeedItems] = useState([
    {
      id: 1,
      name: "John Doe",
      username: "johnd",
      avatar: "https://example.com/avatar1.jpg",
      content: "Just crushed a 5k run! 💪 #FitnessGoals",
      likes: 15,
      liked: false,
      comments: [
        {
          name: "Jane Smith",
          avatar: "https://example.com/avatar2.jpg",
          content: "Great job!",
        },
      ],
    },
    {
      id: 2,
      name: "Alice Johnson",
      username: "alicej",
      avatar: "https://example.com/avatar3.jpg",
      content: "New PR on bench press today! 🏋️‍♀️",
      image: "https://example.com/gym-image.jpg",
      likes: 23,
      liked: true,
      comments: [],
    },
    // Add more feed items as needed
  ]);

  const handleLike = (id: any) => {
    setFeedItems(
      feedItems.map((item: any) =>
        item.id === id
          ? {
              ...item,
              liked: !item.liked,
              likes: item.liked ? item.likes - 1 : item.likes + 1,
            }
          : item
      )
    );
  };

  const handleComment = (id: any, comment: any) => {
    if (!comment) return;
    setFeedItems(
      feedItems.map((item: any) =>
        item.id === id
          ? {
              ...item,
              comments: [
                ...item.comments,
                {
                  name: "You",
                  avatar: "https://example.com/your-avatar.jpg",
                  content: comment,
                },
              ],
            }
          : item
      )
    );
  };

  return (
    <View>
      <Container maxWidth={"100%"}>
        <Heading padding={4} width={"100%"}>
          Community
        </Heading>
        <FlatList
          width={"100%"}
          data={feedItems}
          renderItem={({ item }) => (
            <FitnessFeedItem
              item={item}
              onLike={handleLike}
              onComment={handleComment}
            />
          )}
          keyExtractor={(item: any) => item.id.toString()}
        />
      </Container>
    </View>
  );
}
