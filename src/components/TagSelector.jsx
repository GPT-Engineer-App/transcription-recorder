import React from "react";
import { Box, Wrap, WrapItem, Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";

const TagSelector = ({ suggestedTags, selectedTags, setSelectedTags }) => {
  const handleTagToggle = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <Box mb={4}>
      <Wrap>
        {suggestedTags.map((tag) => (
          <WrapItem key={tag}>
            <Tag size="md" borderRadius="full" variant="solid" colorScheme={selectedTags.includes(tag) ? "green" : "gray"} cursor="pointer" onClick={() => handleTagToggle(tag)}>
              <TagLabel>{tag}</TagLabel>
              {selectedTags.includes(tag) && <TagCloseButton />}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default TagSelector;
