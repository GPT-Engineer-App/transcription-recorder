import React, { useState } from "react";
import { Box, Heading, Text, Image, Wrap, WrapItem, Tag, useDisclosure } from "@chakra-ui/react";
import RecordingModal from "../components/RecordingModal";

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

const PastRecordings = ({ recordings }) => {
  const [selectedRecording, setSelectedRecording] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openModal = (recording) => {
    setSelectedRecording(recording);
    onOpen();
  };

  return (
    <Box maxWidth="container.lg" mx="auto" py={8}>
      <Heading as="h1" size="2xl" mb={8} color="brand.700">
        Past Recordings
      </Heading>
      <Wrap spacing={8}>
        {recordings.map((recording) => (
          <WrapItem key={recording.id} onClick={() => openModal(recording)} cursor="pointer">
            <Box maxWidth="sm" borderWidth={1} borderRadius="lg" overflow="hidden">
              <Image src={recording.image} alt={recording.title} width="100%" />
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
      <RecordingModal isOpen={isOpen} onClose={onClose} recording={selectedRecording} />
    </Box>
  );
};

export default PastRecordings;
