import React from "react";
import { Box, Flex, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="white" py={4} boxShadow="md">
      <Flex maxW="container.lg" mx="auto" align="center">
        <Link as={RouterLink} to="/" fontWeight="bold" fontSize="xl" color="brand.700">
          Audio Recorder
        </Link>
        <Spacer />
        <Link as={RouterLink} to="/past-recordings" mr={4}>
          Past Recordings
        </Link>
        <Link as={RouterLink} to="/stats">
          Stats
        </Link>
        <Link as={RouterLink} to="/settings" ml={4}>
          Settings
        </Link>
        <Link as={RouterLink} to="/upgrade" ml={4}>
          Upgrade
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
