import * as React from "react";
import { Box, Link } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box pos="fixed" bottom="10px" textAlign="center" width="100%">
      <Link
        color="teal.500"
        href="https://github.com/zaherkassem/Crawler"
        fontSize="2xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Spider-Crawler by Zaher Omar Kassem
      </Link>
    </Box>
  );
};
