import { Box, Button, Center, Flex,Image, Spacer, Text, useToast } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import product1 from '../img/image-product-2-thumbnail.jpg'
import { allContext } from './allContext'
import { allimg } from './Image'
import Yoxla from './ProductImage'


function Body() {
    let {zero, setZero,basket, setBasket}=useContext(allContext)
    const toast = useToast()
    const [products]=useState(allimg)

    const handlePlus = () =>{
        setZero(zero+1)
    }
    const handleMinus = ()=>{
        if(zero){
        setZero(zero-1)
            
        }
    }
    const handleBasket=()=>{
        setBasket(!basket)
        toast({
            title: 'Basket',
            description: "Basket add.",
            status: 'success',
            duration: 1000,
            isClosable: true,
          })
        
    }
  return (
    <>
    <Box w="100%" py="80px" px="230px">
        <Flex>
            <Yoxla/>
            <Spacer/>

            <Box w={'45%'} py={'50px'} >
               
                <Text as='b'>Snaker Company</Text><br/>
                <Text fontSize='5xl' as='b'>Fall Limited Edition Sneakers</Text><br/>
                <Text fontSize='md' py={'10px'} color='#8c8c8c'>
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti harum dolores modi quia fugit sequi. Doloribus vero expedita ullam cupiditate, exercitationem similique assumenda dolores!</Text><br/>
                <Box>
               <Flex>
              <Center>
              <Text fontSize='2xl' as='b'>$125.00</Text>
                 <Text fontSize='lg' as='b' p='0px 13px' ms={'20px'} color='#e68a00' backgroundColor={'#ffe0b3'} borderRadius='3px'>50%</Text>
              </Center>
               </Flex>
                </Box>
                <Text  color='#8c8c8c' as='del'>$250.00</Text>
                <Box py={'30px'} >
                    <Flex>
                    <Center>
                    <Box>
                       <Button px={'20px'} color='#ff9933' onClick={()=>handleMinus()}>
              <Text fontSize='xl' as='b' >-</Text>
                            
                        </Button>
                        {/* <Button px={'20px'}> */}
              <Text fontSize='xl' as='b' px={'20px'}>{zero}</Text>
                            
                        {/* </Button> */}
                        <Button px={'20px'} color='#ff9933' onClick={()=>handlePlus()}>
              <Text fontSize='xl' as='b'>+</Text>
                            
                        </Button>
                       </Box>
                       <Spacer/>
                       <Button py={'20px'} px={'90px'} mx={'10px'} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px;' borderRadius={'3px'} backgroundColor={'#ffbf80'} color="white" _hover={{backgroundColor:'#ffad33'}} onClick={()=>handleBasket()}>
                        Add to Cart
                       </Button>
                    </Center>
                    </Flex>
                </Box>
                 


            </Box>

        </Flex>
    </Box>
    </>
  )
}

export default Body