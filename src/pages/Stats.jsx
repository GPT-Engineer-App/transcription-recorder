import React from "react";
import { Center, VStack, Code } from "@chakra-ui/react";

const Stats = () => {
  return (
    <Center minHeight="100vh" padding="4">
      <VStack spacing={4}>
        <Code children={`Amount of recordings: 42`} />
        <Code children={`Longest recording: 15 minutes and 34 seconds`} />
        <Code children={`AI Analysis: Based on the overall sentiment of the recordings, it appears that productivity peaks on Tuesdays and Fridays.`} />
        <Code children={`To-dos based on yesterday's voice note:\n- Schedule team meeting\n- Review latest project draft\n- Send updated invoice to client`} />
      </VStack>
    </Center>
  );
};

export default Stats;
