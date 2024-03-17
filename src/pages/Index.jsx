import React, { useState, useEffect } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import TagSelector from "../components/TagSelector";

const Index = ({ recordings, setRecordings }) => {
  const [transcription, setTranscription] = useState("");
  const [suggestedTags, setSuggestedTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    if (transcription) {
      const generatedTags = ["tag1", "tag2", "tag3", "tag4", "tag5"];
      setSuggestedTags(generatedTags);
    }
  }, [transcription]);

  const handleSaveRecording = () => {
    const newRecording = {
      id: Date.now(),
      title: "New Recording",
      image: "https://via.placeholder.com/150",
      summary: transcription,
      tags: selectedTags,
    };
    setRecordings([...recordings, newRecording]);
  };

  return (
    <Box maxWidth="container.md" mx="auto" py={8}>
      <Text mb={4}>Transcribe your audio:</Text>
      <Input placeholder="Start typing..." value={transcription} onChange={(e) => setTranscription(e.target.value)} />
      <TagSelector suggestedTags={suggestedTags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      <Button mt={4} colorScheme="brand" onClick={handleSaveRecording}>
        Save Recording
      </Button>
    </Box>
  );
};

export default Index;
