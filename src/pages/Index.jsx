import React, { useState, useRef } from "react";
import { Box, Center, Heading, Text, VStack, useColorModeValue, Spinner } from "@chakra-ui/react";
import { FaMicrophone, FaStop } from "react-icons/fa";

const Index = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcription, setTranscription] = useState("");
  const timerRef = useRef(null);

  const startRecording = () => {
    setIsRecording(true);
    timerRef.current = setInterval(() => {
      setRecordingTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopRecording = () => {
    setIsRecording(false);
    clearInterval(timerRef.current);
    setIsProcessing(true);

    setTimeout(() => {
      setTranscription("This is a sample transcription of the recorded audio. You can replace this with the actual transcription obtained from a speech-to-text service.");
      setIsProcessing(false);
    }, 2000);
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
        <Box borderWidth={2} borderRadius="full" p={8} cursor="pointer" onClick={isRecording ? stopRecording : startRecording} onMouseDown={startRecording} onMouseUp={stopRecording} onTouchStart={startRecording} onTouchEnd={stopRecording}>
          {isRecording ? <FaStop size={48} color="red" /> : <FaMicrophone size={48} />}
        </Box>
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
