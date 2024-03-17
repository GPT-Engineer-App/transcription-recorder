import React, { useState, useRef } from "react";
import { Center, Heading, Text, VStack, useColorModeValue, Spinner, Box, IconButton, Select } from "@chakra-ui/react";
import EmailPreview from "../components/EmailPreview";
import { FaMicrophone, FaStop } from "react-icons/fa";

const Index = () => {
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

  return (
    <Center minHeight="100vh" bg={getBackgroundColor()}>
      <VStack spacing={8}>
        {emailMode === "work" && <EmailPreview emails={emails} />}
        {emailMode === "work" && <EmailPreview emails={emails} />}
        <VStack spacing={4}>
          <Heading as="h1" size="2xl">
            Audio Recorder
          </Heading>
          <Select value={emailMode} onChange={handleEmailModeChange} width="200px">
            <option value="default">Default</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </Select>
        </VStack>
        <IconButton icon={isRecording ? <FaStop /> : <FaMicrophone />} size="lg" colorScheme={isRecording ? "red" : "gray"} onClick={isRecording ? stopRecording : startRecording} borderRadius="full" />
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
