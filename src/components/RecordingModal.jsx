import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Image, Text, Wrap, WrapItem, Tag } from "@chakra-ui/react";

const RecordingModal = ({ isOpen, onClose, recording }) => {
  if (!recording) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{recording.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={recording.image} alt={recording.title} width="100%" mb={4} />
          <Text mb={4}>{recording.summary}</Text>
          <Wrap>
            {recording.tags.map((tag) => (
              <WrapItem key={tag}>
                <Tag>{tag}</Tag>
              </WrapItem>
            ))}
          </Wrap>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RecordingModal;
