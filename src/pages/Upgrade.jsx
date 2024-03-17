import React from "react";
import { Box, VStack, Heading, Text, Button } from "@chakra-ui/react";

const Upgrade = () => {
  return (
    <Box maxWidth="container.md" mx="auto" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" color="brand.700">
          Upgrade
        </Heading>
        <Text fontSize="xl" mb={4}>
          Purchase a subscription to unlock premium features and enhance your experience.
        </Text>
        <Button colorScheme="brand" size="lg">
          Purchase Subscription
        </Button>
      </VStack>
    </Box>
  );
};

export default Upgrade;
