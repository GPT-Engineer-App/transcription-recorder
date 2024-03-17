import React, { useState, useEffect } from "react";
import { Box, FormControl, FormLabel, Input, Button, useToast, VStack, Heading, Text, Switch } from "@chakra-ui/react";

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
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="save-to-obsidian" mb="0">
            Save to Obsidian Vault
          </FormLabel>
          <Switch id="save-to-obsidian" isChecked={saveToObsidian} onChange={(event) => setSaveToObsidian(event.target.checked)} />
          <Text ml={2}>{saveToObsidian ? "On" : "Off"}</Text>
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
