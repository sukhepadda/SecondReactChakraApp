import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

function Footer() {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w="full" px="4">
          <Heading size="md" textTransform={'uppercase'} textAlign={["center", "left"]}>
            Follow My Github for more Details "sukhepadda"
          </Heading>
          <HStack borderBottom="2px solid white" py="2">
            <Input
              placeholder="Enter Email Here..."
              border="none"
              borderRadius={'none'}
              outline="none"
              focusBorderColor="none"
            />
            <Button
              p="0"
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size="20" />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w="full"
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading size="md" textTransform={'uppercase'} textAlign="center">
            Padda Video Hub
          </Heading>
          <Text>@all rights and reserved</Text>
        </VStack>
        <VStack w="full">
          <Heading size="md" textTransform={'uppercase'} textAlign="center">
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="purple">
            <a href="https://github.com/sukhepadda" target="_blank">
              Github
            </a>
          </Button>
          <Button variant={'link'} colorScheme="purple">
            <a href="https://twitter.com/psukhwantsingh" target="_blank">
              Twitter
            </a>
          </Button>
          <Button variant={'link'} colorScheme="purple">
            <a href="https://instagram.com/paddasukhwantsingh" target="_blank">
              Instagram
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer;
