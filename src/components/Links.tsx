import * as React from "react";
import { Box, Link, ListItem, OrderedList } from "@chakra-ui/react";

interface ILinks {
  links: string[];
}
export const Links = ({ links }: ILinks) => {
  const linksLength: string = links ? links.length + "" : "";
  return (
    <Box textAlign="left" width="100%">
      <OrderedList size={linksLength}>
        {links.map((item, index) => (
          <ListItem key={index}>
            <Link>{item}</Link>
          </ListItem>
        ))}
      </OrderedList>
    </Box>
  );
};
