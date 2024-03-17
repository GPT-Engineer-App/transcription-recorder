import React, { useState, useRef } from "react";
import { Box, Center, Heading, Text, VStack, useColorModeValue, Spinner, Icon } from "@chakra-ui/react";
import { FaMicrophone, FaStop, FaLock, FaLockOpen } from "react-icons/fa";

const Index = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcription, setTranscription] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const timerRef = useRef(null);

  const startRecording = (event) => {
    setIsRecording(true);
    timerRef.current = setInterval(() => {
      setRecordingTime((prevTime) => prevTime + 1);
    }, 1000);

    if (event.type === "mouseup" || event.type === "touchend") {
      const { clientX } = event.type === "mouseup" ? event : event.changedTouches[0];
      if (clientX > event.target.getBoundingClientRect().right - 50) {
        setIsLocked(true);
      }
    }
  };

  const stopRecording = () => {
    if (!isLocked) {
      setIsRecording(false);
      clearInterval(timerRef.current);
      setIsProcessing(true);
    }

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
        <Box borderWidth={2} borderRadius="full" p={8} cursor="pointer" onClick={isRecording && !isLocked ? stopRecording : startRecording} onMouseDown={startRecording} onMouseUp={startRecording} onTouchStart={startRecording} onTouchEnd={startRecording}>
          {isRecording ? <Icon as={FaStop} boxSize={12} color="red.500" /> : <Icon as={FaMicrophone} boxSize={12} />}
          {isLocked && <Icon as={FaLock} boxSize={6} color="green.500" position="absolute" top={2} right={2} />}
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
