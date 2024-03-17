import React from "react";
import { Box, Flex, Spacer, Link, Icon } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaMicrophone, FaHistory, FaChartBar, FaCog, FaStar } from "react-icons/fa";

const Navigation = () => {
  return (
    <Box bg="white" py={4} boxShadow="md">
      <Flex maxW="container.lg" mx="auto" align="center">
        <Link as={RouterLink} to="/" fontWeight="bold" fontSize="xl" color="brand.700">
          Audio Recorder
        </Link>
        <Spacer />
        <Link as={RouterLink} to="/past-recordings" mr={4}>
          <Icon as={FaHistory} boxSize={6} />
        </Link>
        <Link as={RouterLink} to="/stats">
          <Icon as={FaChartBar} boxSize={6} />
        </Link>
        <Link as={RouterLink} to="/settings" ml={4}>
          <Icon as={FaCog} boxSize={6} />
        </Link>
        <Link as={RouterLink} to="/upgrade" ml={4}>
          <Icon as={FaStar} boxSize={6} />
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
