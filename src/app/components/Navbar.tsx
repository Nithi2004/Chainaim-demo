"use client"; // Mark this file as a client component

import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <Box>
      <Flex
        bgGradient="linear(to-r, orange.400, yellow.400)"
        color="white"
        minH="80px"
        py={{ base: 4 }}
        px={{ base: 6 }}
        align="center"
        justify="center" // Center the title
      >
        {/* Left Side: Page Title */}
        <Flex align="center">
          <Link href="/" passHref>
            <Title label="CHAINAIM" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

// Title component
const Title = ({ label }: { label: string }) => {
  return (
    <Box
      fontSize="2xl"
      fontWeight="bold"
      color="white"
      cursor="pointer" // Change cursor to pointer for interactivity
    >
      {label}
    </Box>
  );
};

export default Navbar;
