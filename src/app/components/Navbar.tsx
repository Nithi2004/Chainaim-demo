"use client"; // Mark this file as a client component

import { Box, Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex
        bgGradient="linear(to-r, orange.400, yellow.400)"
        color="white"
        minH="80px"
        py={{ base: 4 }}
        px={{ base: 6 }}
        align="center"
        justify="space-between" // Space between title and the theme toggle button
      >
        {/* Left Side: Page Title */}
        <Flex align="center">
          <Link href="/" passHref>
            <Title label="CHAINAIM" />
          </Link>
        </Flex>

        {/* Right Side: Theme Toggle Button */}
        <IconButton
          aria-label="Toggle theme"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          color="white"
          fontSize="20px"
          _hover={{ bg: "teal.500", color: "white" }}
        />
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
