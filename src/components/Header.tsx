import * as React from "react";
import { Box, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box pos="fixed" top="0" textAlign="center" width="100%">
      <Heading color="teal.500">Spider-Crawler</Heading>
    </Box>
  );
};
