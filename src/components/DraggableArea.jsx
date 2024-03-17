import React, { useState, useRef } from "react";
import { Box } from "@chakra-ui/react";

const DraggableArea = ({ children, onLock }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const areaRef = useRef(null);

  const handleMouseDown = (event) => {
    setIsDragging(true);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const areaRect = areaRef.current.getBoundingClientRect();
      const newX = event.clientX - areaRect.left;
      const newY = event.clientY - areaRect.top;
      setPosition({ x: newX, y: newY });

      if (newX > areaRect.width - 100) {
        onLock();
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <Box ref={areaRef} position="fixed" inset={0} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
      <Box position="absolute" left={position.x} top={position.y}>
        {children}
      </Box>
      <Box position="fixed" right={0} top={0} bottom={0} width="100px" bg="gray.200" borderLeftWidth={2} />
    </Box>
  );
};

export default DraggableArea;
