// src/app/components/Home.tsx
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import Link from 'next/link'; // Import the Link component

const Home = () => {
  return (
    <Box>
      <SimpleGrid columns={2} spacing={8} mt={8}>
        <Link href="/deep-composition-prover" passHref>
          <Box
            width="80%"
            bgGradient="linear(to-r, orange.300, orange.400)"
            height="200px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            mx="auto"
            cursor="pointer"
          >
            <Text color="white" fontSize="lg">ZKPET Deep Composition Prover</Text>    
          </Box>
        </Link>

        <Link href="/domain-registry" passHref>
          <Box
            width="80%"
            bgGradient="linear(to-r, orange.300, orange.400)"
            height="200px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            mx="auto"
            cursor="pointer"
          >
            <Text color="white" fontSize="lg">ZKPET Domain Registry</Text>
          </Box>
        </Link>

        <Link href="/business-process-prover" passHref>
          <Box
            width="80%"
            bgGradient="linear(to-r, orange.300, orange.400)"
            height="200px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            mx="auto"
            cursor="pointer"
          >
            <Text color="white" fontSize="lg">ZKPET Business Process Prover</Text>  
          </Box>
        </Link>

        <Link href="/risk-model-prover" passHref>
          <Box
            width="80%"
            bgGradient="linear(to-r, orange.300, orange.400)"
            height="200px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            mx="auto"
            cursor="pointer"
          >
            <Text color="white" fontSize="lg">ZKPET Risk Model Prover</Text>
          </Box>
        </Link>
      </SimpleGrid>
    </Box>
  );
};

export default Home;
