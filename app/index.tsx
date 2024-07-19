import React, { useState } from "react";
import {
  FlatList,
  Box,
  HStack,
  VStack,
  Text,
  Avatar,
  Icon,
  Pressable,
  Input,
  Button,
  Image
} from "native-base";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const FitnessFeedItem = ({ item, onLike, onComment }: any) => {
  const [comment, setComment] = useState("");

  return (
    <Box borderBottomWidth={1} borderColor="coolGray.200" py={2}>
      <HStack space={3} justifyContent="space-between">
        <Avatar size="48px" source={{ uri: item.avatar }} />
        <VStack flex={1}>
          <HStack justifyContent="space-between">
            <Text bold>{item.name}</Text>
            <Text color="coolGray.500">@{item.username}</Text>
          </HStack>
          <Text mt={1}>{item.content}</Text>
          {item.image && (
            <Box mt={2} rounded="lg" overflow="hidden">
              <Image
                source={{ uri: item.image }}
                alt="Post image"
                height={200}
              />
            </Box>
          )}
          <HStack justifyContent="space-between" mt={2}>
            <Pressable onPress={() => onLike(item.id)}>
              <HStack space={1} alignItems="center">
                <Icon
                  as={FontAwesome5}
                  name="dumbbell"
                  color={item.liked ? "red.500" : "coolGray.400"}
                  size="sm"
                />
                <Text color="coolGray.500">{item.likes}</Text>
              </HStack>
            </Pressable>
            <Pressable onPress={() => onComment(item.id)}>
              <HStack space={1} alignItems="center">
                <Icon
                  as={MaterialIcons}
                  name="comment"
                  color="coolGray.400"
                  size="sm"
                />
                <Text color="coolGray.500">{item.comments.length}</Text>
              </HStack>
            </Pressable>
            <Icon
              as={MaterialIcons}
              name="share"
              color="coolGray.400"
              size="sm"
            />
          </HStack>
          <VStack mt={2}>
            {item.comments.map((comment: any, index: any) => (
              <HStack key={index} space={2} mt={1}>
                <Avatar size="24px" source={{ uri: comment.avatar }} />
                <VStack>
                  <Text bold>{comment.name}</Text>
                  <Text>{comment.content}</Text>
                </VStack>
              </HStack>
            ))}
          </VStack>
          <HStack mt={2} space={2}>
            <Input
              flex={1}
              placeholder="Add a comment..."
              value={comment}
              onChangeText={setComment}
            />
            <Button
              onPress={() => {
                onComment(item.id, comment);
                setComment("");
              }}
            >
              Post
            </Button>
          </HStack>
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

  const handleLike = (id) => {
    setFeedItems(
      feedItems.map((item) =>
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

  const handleComment = (id, comment) => {
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
    <FlatList
      data={feedItems}
      renderItem={({ item }) => (
        <FitnessFeedItem
          item={item}
          onLike={handleLike}
          onComment={handleComment}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
