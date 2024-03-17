import React from "react";
import { Box, Heading, Text, Image, Wrap, WrapItem, Tag } from "@chakra-ui/react";

const recordings = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    title: "Recording 1",
    summary: "This is a summary of recording 1.",
    tags: ["tag1", "tag2"],
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "Recording 2",
    summary: "This is a summary of recording 2.",
    tags: ["tag2", "tag3"],
  },
];

const PastRecordings = () => {
  return (
    <Box maxWidth="container.lg" mx="auto" py={8}>
      <Heading mb={8}>Past Recordings</Heading>
      <Wrap spacing={8}>
        {recordings.map((recording) => (
          <WrapItem key={recording.id}>
            <Box maxWidth="sm" borderWidth={1} borderRadius="lg" overflow="hidden">
              <Image src={recording.image} alt={recording.title} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  {recording.title}
                </Heading>
                <Text mb={4}>{recording.summary}</Text>
                <Wrap>
                  {recording.tags.map((tag) => (
                    <WrapItem key={tag}>
                      <Tag>{tag}</Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default PastRecordings;
