import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Spacer,
  Text,
  useToast,
  UnorderedList,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { allimg } from "./Image";

function Yoxla() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [products] = useState(allimg);

  const [value, setValue] = useState(1);
  const { mainImg } = products[value];

  return (
    <>
      
          <Box w={"45%"}>
            <Box w={"100%"} h={"400px"}>
              <Image
                w={"100%"}
                h={"100%"}
                borderRadius={"15px"}
                objectFit={"cover"}
                onClick={onOpen}
                src={mainImg}
              />
            </Box>
            <Box py={"20px"} display={"flex"} justifyContent={"between"}>
              <Flex>
                <UnorderedList>
                  <Flex>
                    {products.map((i, index) => (
                      <Center>
                        <Flex>
                          <ListItem
                            mx="3px"
                            cursor={"pointer"}
                            onClick={() => setValue(index)}
                            className={index === value && "border_add"}
                          >
                            {" "}
                            <Image
                              w={"100%"}
                              borderRadius={"15px"}
                              src={i.thumbnail}
                              transition="0.2s"
                              _hover={{ opacity: "0.5", cursor: "pointer" }}
                            />
                          </ListItem>
                        </Flex>
                      </Center>
                    ))}
                  </Flex>
                </UnorderedList>
              </Flex>
            </Box>
          </Box>

      
      <Modal isOpen={isOpen} onClose={onClose} className='back_modal'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Box w={"100%"}>
            <Box w={"100%"} h={"400px"}>
              <Image
                w={"100%"}
                h={"100%"}
                borderRadius={"15px"}
                objectFit={"cover"}
                onClick={onOpen}
                src={mainImg}
              />
            </Box>
            <Box py={"20px"} display={"flex"} justifyContent={"between"}>
              <Flex>
                <UnorderedList>
                  <Flex>
                    {products.map((i, index) => (
                      <Center>
                        <Flex>
                          <ListItem
                            mx="3px"
                            cursor={"pointer"}
                            onClick={() => setValue(index)}
                            className={index === value && "border_add"}
                          >
                            {" "}
                            <Image
                              w={"100%"}
                              borderRadius={"15px"}
                              src={i.thumbnail}
                              transition="0.2s"
                              _hover={{ opacity: "0.5", cursor: "pointer" }}
                            />
                          </ListItem>
                        </Flex>
                      </Center>
                    ))}
                  </Flex>
                </UnorderedList>
              </Flex>
            </Box>
          </Box>
          </ModalBody>

         
        </ModalContent>
      </Modal>
    </>
  );
}

export default Yoxla;
