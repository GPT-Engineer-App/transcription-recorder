import React from "react";
import { Box, Text } from "@chakra-ui/react";

const EmailPreview = ({ emails }) => {
  return (
    <Box bg="white" p={4} borderRadius="md" boxShadow="md" mb={8}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Last 5 Emails
      </Text>
      {emails.map((email, index) => (
        <Box key={index} mb={2}>
          <Text fontWeight="bold">{email.subject}</Text>
          <Text fontSize="sm" color="gray.500">
            {email.preview}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default EmailPreview;
