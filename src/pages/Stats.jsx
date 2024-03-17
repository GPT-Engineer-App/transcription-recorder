import React from "react";
import { Box, Center, VStack, Heading, Text, Divider } from "@chakra-ui/react";

const Stats = () => {
  return (
    <Box bg="brand.50" minHeight="100vh" p={8}>
      <Center py={12}>
        <VStack spacing={8} maxW="container.md" mx="auto">
          <Heading as="h1" size="2xl" color="brand.700">
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
        </VStack>
      </Center>
    </Box>
  );
};

export default Stats;
