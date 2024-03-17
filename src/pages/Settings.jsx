import React, { useState, useEffect } from "react";
import { Box, FormControl, FormLabel, Input, Button, useToast, VStack, Heading } from "@chakra-ui/react";

const Settings = () => {
  const toast = useToast();
  const [apiKey, setApiKey] = useState(() => {
    const storedApiKey = localStorage.getItem("api_key");
    return storedApiKey || "";
  });

  useEffect(() => {
    localStorage.setItem("api_key", apiKey);
  }, [apiKey]);

  const handleApiKeyChange = (event) => setApiKey(event.target.value);

  const saveApiKey = () => {
    toast({
      title: "API Key saved",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box maxWidth="container.md" mx="auto" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" color="brand.700">
          Settings
        </Heading>
        <FormControl id="api-key">
          <FormLabel>API Key</FormLabel>
          <Input type="text" value={apiKey} onChange={handleApiKeyChange} placeholder="Enter your API Key here" />
          <Button mt={4} colorScheme="brand" onClick={saveApiKey}>
            Save API Key
          </Button>
        </FormControl>
      </VStack>
    </Box>
  );
};

export default Settings;
