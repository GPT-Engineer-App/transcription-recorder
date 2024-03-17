import React, { useState, useRef } from "react";
import { Center, Heading, Text, VStack, useColorModeValue, Spinner, Box } from "@chakra-ui/react";
import DraggableArea from "../components/DraggableArea";
import DraggableMic from "../components/DraggableMic";

const Index = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcription, setTranscription] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const timerRef = useRef(null);

  const startRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      timerRef.current = setInterval(() => {
        setRecordingTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopRecording = () => {
    if (isRecording && !isLocked) {
      setIsRecording(false);
      clearInterval(timerRef.current);
      setIsProcessing(true);

      setTimeout(() => {
        setTranscription("This is a sample transcription of the recorded audio. You can replace this with the actual transcription obtained from a speech-to-text service.");
        setIsProcessing(false);
      }, 2000);
    }
  };

  const handleLock = () => {
    setIsLocked(true);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <Center minHeight="100vh" bg={useColorModeValue("gray.100", "gray.800")}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Audio Recorder
        </Heading>
        <DraggableArea onLock={handleLock}>
          <DraggableMic isRecording={isRecording} isLocked={isLocked} onClick={isRecording ? stopRecording : startRecording} />
        </DraggableArea>
        <Text fontSize="2xl">{formatTime(recordingTime)}</Text>
        {isProcessing && (
          <Box>
            <Spinner size="xl" />
            <Text mt={4}>Processing...</Text>
          </Box>
        )}
        {!isProcessing && transcription && (
          <Box maxWidth="md" p={4} borderWidth={1} borderRadius="md">
            <Heading as="h2" size="lg" mb={4}>
              Transcription
            </Heading>
            <Text>{transcription}</Text>
          </Box>
        )}
      </VStack>
    </Center>
  );
};

export default Index;
