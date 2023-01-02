import * as React from "react";
import {
  Box,
  Link,
  Text,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

interface ILinks {
  links: string[];
}
export const Links = ({ links }: ILinks) => {
  return (
    <Box
      textAlign="left"
      width="500px"
      maxHeight="400px"
      overflow=" hidden auto"
      __css={{
        "&::-webkit-scrollbar": {
          width: "0.25rem",
          height: "0.25rem !important",
        },

        "&::-webkit-scrollbar-track": {
          width: "0.375rem",
          height: "0.375rem !important",
        },

        "&::-webkit-scrollbar-thumb": {
          background: "#c4c4c4",
          borderRadius: "1.5rem",
        },
      }}
    >
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            {links.map((link, index) => (
              <Tr key={index}>
                <Td>{index}</Td>
                <Td>
                  <Text noOfLines={1}>
                    <Link href={link}>{link}</Link>
                  </Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
