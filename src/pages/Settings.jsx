import React, { useState, useEffect } from "react";
import { Box, FormControl, FormLabel, Input, Button, useToast, VStack, Heading, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";

const Settings = () => {
  const toast = useToast();
  const [apiKey, setApiKey] = useState(() => {
    const storedApiKey = localStorage.getItem("api_key");
    return storedApiKey || "";
  });
  const [saveToObsidian, setSaveToObsidian] = useState(false);

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
        <FormControl id="save-to-obsidian">
          <FormLabel>Save to Obsidian Vault</FormLabel>
          <Slider aria-label="save-to-obsidian" defaultValue={saveToObsidian ? 1 : 0} min={0} max={1} step={1} onChange={(value) => setSaveToObsidian(value === 1)}>
            <SliderTrack>
              <SliderFilledTrack bg={saveToObsidian ? "brand.500" : "gray.300"} />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
          <Text mt={2}>{saveToObsidian ? "Enabled" : "Disabled"}</Text>
        </FormControl>
        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>
            Delete Account
          </Heading>
          <Text mb={4}>Deleting your account will permanently remove all your data. This action cannot be undone.</Text>
          <Button
            colorScheme="red"
            onClick={() => {
              if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
                toast({
                  title: "Account deleted",
                  description: "Your account has been successfully deleted.",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                });
              }
            }}
          >
            Delete Account
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Settings;
