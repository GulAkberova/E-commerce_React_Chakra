import React, { useContext } from 'react'
import { allContext } from './allContext'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Center,
} from "@chakra-ui/react";
import { ChevronDownIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Image,
  Flex,
  UnorderedList,
  ListItem,
  Spacer,
  Text,
  useToast
} from "@chakra-ui/react";
import logo from "../img/logo.svg";
import man from "../img/image-avatar.png";
import basket from "../img/icon-cart.svg";
import product1 from '../img/image-product-2-thumbnail.jpg'


function Header() {
  let {zero, setZero,basket, setBasket}=useContext(allContext)

  return (
    <>
      <Box w="100%" px="200px">
       <Box  borderBottom={'1px solid #8c8c8c'}  py="30px" px={'30px'}>
       <Flex >
          <Center>
          <Box>
            <Image src={logo} />
          </Box>
          </Center>

          <Center>
          <Box>
            <UnorderedList>
              <Center>
              <Flex>
                <ListItem mx="20px"  cursor={'pointer'} transition='0.5s' _hover={{color:'orange'}}>Collections</ListItem>
                <ListItem mx="20px"cursor={'pointer'} transition='0.5s' _hover={{color:'orange'}}>Men</ListItem>
                <ListItem mx="20px"cursor={'pointer'} transition='0.5s' _hover={{color:'orange'}}>Women</ListItem>
                <ListItem mx="20px"cursor={'pointer'} transition='0.5s' _hover={{color:'orange'}}>About</ListItem>
                <ListItem mx="20px"cursor={'pointer'} transition='0.5s' _hover={{color:'orange'}}>Contact</ListItem>
              </Flex>
              </Center>
            </UnorderedList>
          </Box>
          </Center>
          <Spacer />
          <Box>
            <Flex>
              <Center>
                <Menu >
                  <MenuButton
                    as={Button}
                    mx="20px"
                    mt="10px"
                    rightIcon={<ChevronDownIcon />}
                  >
                    <img src={basket} />
                  </MenuButton>
                  <MenuList  w={'400px'}>
                    <MenuItem p={'10px'} bg={'white'} borderBottom={'1px solid  #d9d9d9'}>Cart</MenuItem>
                   <Box>
                    {basket ? 
                    <Box p='20px'>
                      <Box>
                        <Flex>
                        <Image w={'60px'} h={'60px'} borderRadius={'5px'} objectFit={'cover'} src={product1}/>
                        <Spacer/>
                        <Box>
                        <Text fontSize='md'>Fall Limited Edition Sneakers</Text>
                        <Box>
                         <Flex>
                         <Text fontSize='md'>$125.00 x {zero}</Text> 
                          <Text as='b'ps='4px'>${125* zero}.00</Text>
                         </Flex>
                         </Box> 

                          </Box>
                        <Spacer/>

                          <DeleteIcon/>

                          </Flex>
                      </Box>

                    </Box> :
                      <Center>
                      <Text fontSize='xl' py='40px' >Your cart is empty</Text>
                      </Center>
                      }

                   </Box>
                  </MenuList>
                </Menu>
                <Box>
                  <Image width={"40px"} src={man} />
                </Box>
              </Center>
            </Flex>
          </Box>
        </Flex>
       </Box>
      </Box>
    </>
  );
}

export default Header;
