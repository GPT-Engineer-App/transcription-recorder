import React, { useState, useRef } from "react";
import { Center, Heading, Text, VStack, useColorModeValue, Spinner, Box, IconButton, Select, Button, Circle, Textarea, useToast } from "@chakra-ui/react";
import EmailPreview from "../components/EmailPreview";
import { FaMicrophone, FaStop, FaPlay, FaCopy, FaSave } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcription, setTranscription] = useState("");
  const [emailMode, setEmailMode] = useState("default");

  const handleEmailModeChange = (event) => {
    setEmailMode(event.target.value);
  };

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
    if (isRecording) {
      setIsRecording(false);
      clearInterval(timerRef.current);
      setIsProcessing(true);

      setTimeout(() => {
        setTranscription("This is a sample transcription of the recorded audio. You can replace this with the actual transcription obtained from a speech-to-text service.");
        setIsProcessing(false);
      }, 2000);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const getBackgroundColor = () => {
    switch (emailMode) {
      case "work":
        return "blue.100";
      case "personal":
        return "green.100";
      default:
        return useColorModeValue("gray.100", "gray.800");
    }
  };

  const [emails, setEmails] = useState([
    { subject: "Project Update", preview: "Hi team, just wanted to share the latest progress on..." },
    { subject: "Invitation: Team Lunch", preview: "You're invited to join us for a team lunch on..." },
    { subject: "Reminder: Performance Review", preview: "This is a friendly reminder that your performance review..." },
    { subject: "New Client Proposal", preview: "Please find attached the proposal for our new client..." },
    { subject: "Urgent: Server Downtime", preview: "We are currently experiencing server downtime. Our team..." },
  ]);

  const [recordings, setRecordings] = useState([]);

  return (
    <Center py={8}>
      <VStack spacing={8} width="100%" maxWidth="container.md">
        <Heading as="h1" size="2xl" color="brand.700">
          Audio Recorder
        </Heading>
        <VStack spacing={4}>
          {!isRecording && (
            <Button leftIcon={<FaMicrophone />} colorScheme="brand" size="lg" onClick={startRecording}>
              Start Recording
            </Button>
          )}
          {isRecording && (
            <>
              <Circle size="24px" bg="red.500" color="white" animation="pulse 1s infinite">
                <Box as={FaMicrophone} />
              </Circle>
              <Button leftIcon={<FaStop />} colorScheme="red" size="lg" onClick={stopRecording}>
                Stop Recording
              </Button>
            </>
          )}
          <Text fontSize="2xl">{formatTime(recordingTime)}</Text>
        </VStack>
        {isProcessing && (
          <Box>
            <Spinner size="xl" />
            <Text mt={4}>Processing...</Text>
          </Box>
        )}
        {!isProcessing && transcription && (
          <Box maxWidth="md" p={6} borderWidth={1} borderRadius="md" bg="white" boxShadow="md">
            <Heading as="h2" size="lg" mb={4}>
              Transcription
            </Heading>
            <Textarea value={transcription} onChange={(e) => setTranscription(e.target.value)} mb={4} />
            <Button
              leftIcon={<FaCopy />}
              colorScheme="brand"
              mr={4}
              onClick={() => {
                navigator.clipboard.writeText(transcription);
                toast({
                  title: "Copied to clipboard",
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                });
              }}
            >
              Copy
            </Button>
            <Button
              leftIcon={<FaSave />}
              colorScheme="brand"
              onClick={() => {
                const newRecording = {
                  id: Date.now(),
                  image: "https://via.placeholder.com/150",
                  title: `Recording ${recordings.length + 1}`,
                  summary: transcription,
                  tags: ["tag1", "tag2"],
                };
                setRecordings([...recordings, newRecording]);
                toast({
                  title: "Transcription saved",
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                });
              }}
            >
              Save
            </Button>
          </Box>
        )}
      </VStack>
    </Center>
  );
};

export default Index;
