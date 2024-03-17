import React from "react";
import { Box, VStack, Heading, Text, Divider } from "@chakra-ui/react";

const Stats = () => {
  return (
    <Box bg="gray.100" minHeight="100vh" py={12}>
      <VStack spacing={8} maxW="container.md" mx="auto">
        <Heading as="h1" size="2xl" fontFamily="mono" color="gray.700">
          Recording Stats
        </Heading>
        <Divider borderColor="gray.400" />
        <Text fontSize="xl" fontFamily="mono">
          Amount of recordings: 42
        </Text>
        <Text fontSize="xl" fontFamily="mono">
          Longest recording: 15 minutes and 34 seconds
        </Text>
        <Divider borderColor="gray.400" />
        <Text fontSize="lg" fontFamily="mono" textAlign="center">
          AI Analysis: Based on the overall sentiment of the recordings, it appears that productivity peaks on Tuesdays and Fridays.
        </Text>
        <Divider borderColor="gray.400" />
        <Box bg="white" p={6} borderRadius="md" boxShadow="md">
          <Heading as="h2" size="lg" mb={4} fontFamily="mono">
            To-dos based on yesterday's voice note:
          </Heading>
          <Text fontFamily="mono">
            - Schedule team meeting
            <br />
            - Review latest project draft
            <br />- Send updated invoice to client
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Stats;
