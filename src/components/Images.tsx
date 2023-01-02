import * as React from "react";
import { Box, Link } from "@chakra-ui/react";

interface IImagesProps {
  images: any[];
}

export const Images = ({ images }: IImagesProps) => {
  return (
    <Box textAlign="left" width="100%">
      Images
    </Box>
  );
};
