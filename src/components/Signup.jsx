import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <Container maxW={'container.xl'} h={'130vh'} p="16">
    <form>
      <VStack alignItems={'stretch'} spacing={'8'} w={["full", "96"]} m="auto" my={16}>
        <Heading textAlign={'center'}>PADDA VIDEO HUB</Heading>
<Avatar alignSelf={"center"} boxSize={"28"} />
        <Input
          placeholder="Username"
          type="text"
          required
          focusBorderColor="purple.500"
        />
        <Input
          placeholder="Email"
          type="email"
          required
          focusBorderColor="purple.500"
        />
        <Input
          placeholder="Password"
          type={'password'}
          required
          focusBorderColor="purple.500"
        />

        <Button colorScheme="purple" type="submit">
          Sign Up
        </Button>
        <Text textAlign={'right'}>
          Already have an Account?{' '}
          <Button variant={'link'} colorScheme="purple">
            <Link to={'/login'}> login</Link>
          </Button>
        </Text>
      </VStack>
    </form>
  </Container>
  )
}

export default Signup