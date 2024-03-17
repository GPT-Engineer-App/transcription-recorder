import React from "react";
import { Icon } from "@chakra-ui/react";
import { FaMicrophone, FaStop, FaLock } from "react-icons/fa";

const DraggableMic = ({ isRecording, isLocked, onClick }) => {
  return (
    <Icon as={isRecording ? FaStop : FaMicrophone} boxSize={12} color={isRecording ? "red.500" : "black"} cursor="pointer" onClick={onClick} position="relative">
      {isLocked && <Icon as={FaLock} boxSize={6} color="green.500" position="absolute" top={-2} right={-2} />}
    </Icon>
  );
};

export default DraggableMic;
