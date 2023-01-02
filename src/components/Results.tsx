import * as React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Images } from "./Images";
import { Links } from "./Links";
import { Screenshots } from "./Screenshots";
import { CrawlApi } from "../lib/spider";

interface IResultsProps {
  inputWebsite: string;
}

export const Results = ({ inputWebsite }: IResultsProps) => {
  let images: any = [];
  const [links, setLinks] = React.useState<string[]>([]);

  React.useEffect(() => {
    CrawlApi(inputWebsite)
      .then((result) => {
        const linksFromRes = result ?? { links: [] };
        setLinks(linksFromRes?.links);
      })
      .catch((err) => {});
  }, [inputWebsite]);

  console.log({ links, images });
  return (
    <Tabs>
      <TabList>
        <Tab>Links</Tab>
        <Tab>Images</Tab>
        {/* <Tab>Screenshots</Tab>*/}
      </TabList>

      <TabPanels>
        <TabPanel>
          <Links links={links} />
        </TabPanel>
        <TabPanel>
          <Images images={images} />
        </TabPanel>
        {/*<TabPanel>
          <Screenshots screenshots={screenshots} />
        </TabPanel>*/}
      </TabPanels>
    </Tabs>
  );
};
