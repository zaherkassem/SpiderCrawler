import axios from "axios";
import * as cheerio from "cheerio";
const baseUrl = "http://localhost:8080";

interface ICrawl {
  url: string;
  ignore: string;
}

const seenUrls = {} as any;

const getUrl = (link: string, host: string, protocol: string) => {
  if (link.includes("http")) {
    return link;
  } else if (link.startsWith("/")) {
    return `${protocol}//${host}${link}`;
  } else {
    return `${protocol}//${host}/${link}`;
  }
};

const crawl = async ({ url, ignore }: ICrawl) => {
  // if (!url || !window.URL || seenUrls[url]) return;

  seenUrls[url] = true;
  const { host, protocol } = new window.URL(url);
  const { data } = await axios.get(`${baseUrl}/getCrawler?url=${url}`);

  // const html = await data.text();
  const $ = cheerio.load(data);

  const links = $("a")
    .map((i, link) => link.attribs.href)
    .get();
  // const imageUrls = $("img")
  //   .map((i, link) => link.attribs.src)
  //   .get();

  // imageUrls?.forEach((imageUrl: string) => {
  //   axios({ url: getUrl(imageUrl, host, protocol) }).then((response: any) => {
  //     const filename = path.basename(imageUrl);
  //     const dest = fs.createWriteStream(`images/${filename}`);
  //     response.body.pipe(dest);
  //   });
  // });

  links
    ?.filter((link) => link.includes(host) && !link.includes(ignore))
    .forEach((link) => {
      crawl({
        url: getUrl(link, host, protocol),
        ignore,
      });
    });
  return {
    links,
    // images: imageUrls,
  };
};

export const CrawlApi = (inputWebsite: string) => {
  return crawl({
    url: inputWebsite,
    ignore: "", // "/search",
  });
};
